import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import ExpressionsPlayground from './ExpressionsPlayground'

describe('ExpressionsPlayground', () => {
  const expressionField = () => screen.getByRole('textbox', { name: 'Cucumber Expression' })
  const textField = () => screen.getByRole('textbox', { name: 'Step Text' })
  const statusBadge = () => screen.queryByRole('status')
  const errorAlert = () => screen.queryByRole('alert')
  const nameFields = () => screen.getAllByRole('textbox', { name: 'Name' })
  const regexpFields = () => screen.getAllByRole('textbox', { name: 'Regular expression' })

  // replace a field's contents via paste; per-character typing is unreliable under jsdom,
  // and paste also avoids user-event's special handling of `{` and `[` in regexp values
  async function replace(field: HTMLElement, value: string) {
    const user = userEvent.setup()
    field.focus()
    await user.keyboard('{Control>}a{/Control}')
    await user.paste(value)
  }

  async function click(name: string) {
    await userEvent.setup().click(screen.getByRole('button', { name }))
  }

  it('matches the default step text against the default expression', () => {
    render(<ExpressionsPlayground />)

    expect(expressionField()).toHaveTextContent('I have {int} cucumber(s) in my belly')
    expect(textField()).toHaveTextContent('I have 42 cucumbers in my belly')
    expect(statusBadge()).toHaveTextContent('Matched')
  })

  it('shows the unmatched status when the step text no longer matches', async () => {
    render(<ExpressionsPlayground />)

    await replace(textField(), 'I have a basket of cucumbers')

    expect(statusBadge()).toHaveTextContent('Unmatched')
  })

  it('shows an error and no status when the expression is invalid', async () => {
    render(<ExpressionsPlayground />)

    await replace(expressionField(), 'I have {int} cucumber(s in my belly')

    expect(errorAlert()).toHaveTextContent(`The '(' does not have a matching ')'`)
    expect(statusBadge()).not.toBeInTheDocument()
  })

  it('matches using the custom color parameter type', async () => {
    render(<ExpressionsPlayground />)

    await replace(expressionField(), 'I have a {color} cucumber')
    await replace(textField(), 'I have a red cucumber')

    expect(statusBadge()).toHaveTextContent('Matched')
  })

  it('matches a new colour once the color parameter type is updated', async () => {
    render(<ExpressionsPlayground />)

    await replace(expressionField(), 'I have a {color} cucumber')
    await replace(textField(), 'I have a green cucumber')

    expect(statusBadge()).toHaveTextContent('Unmatched')

    await replace(regexpFields()[0], 'red|blue|yellow|green')

    expect(statusBadge()).toHaveTextContent('Matched')
  })

  it('stops resolving {color} once the parameter type is removed', async () => {
    render(<ExpressionsPlayground />)

    await replace(expressionField(), 'I have a {color} cucumber')
    await click('Remove')

    expect(errorAlert()).toHaveTextContent(`Undefined parameter type 'color'`)
    expect(statusBadge()).not.toBeInTheDocument()
  })

  it('resolves a newly added "flight" parameter type', async () => {
    render(<ExpressionsPlayground />)

    await click('Add another')
    await replace(nameFields().at(-1)!, 'flight')
    await replace(regexpFields().at(-1)!, '[A-Z]{3}-[A-Z]{3}')
    await replace(expressionField(), '{flight}')
    await replace(textField(), 'LHR-CDG')

    expect(statusBadge()).toHaveTextContent('Matched')
  })

  it('surfaces an error when a new parameter type reuses an existing name', async () => {
    render(<ExpressionsPlayground />)

    await click('Add another')
    await replace(nameFields().at(-1)!, 'color')
    await replace(regexpFields().at(-1)!, 'green')

    expect(errorAlert()).toHaveTextContent('There is already a parameter type with name color')
  })
})
