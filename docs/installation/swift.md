---
pagination_prev: installation/index
pagination_next: guides/index
sidebar_custom_props:
  language: Swift
  status: unofficial
  icon: swift.svg
---

# CucumberSwift

[CucumberSwift](https://cucumberswift.org/) is a lightweight, Swift-only
implementation of Cucumber for iOS, tvOS and macOS.
It runs your Gherkin features from XCTest, so you can use it in both unit
and UI test targets.

CucumberSwift is maintained by the [cucumberswift](https://github.com/cucumberswift)
organisation, separately from the Cucumber project.
It uses Cucumber's Gherkin language definitions and test data; its parser
and Cucumber Expressions are its own implementation.

## Swift Package Manager

In Xcode, choose **File > Add Package Dependencies** and enter the repository URL:

```text
https://github.com/cucumberswift/CucumberSwift
```

Add the package to your test target.

Or, in a `Package.swift`, add it as a dependency of your test target:

```swift
dependencies: [
    .package(url: "https://github.com/cucumberswift/CucumberSwift", from: "6.0.0")
],
targets: [
    .testTarget(name: "MyAppTests", dependencies: ["CucumberSwift"])
]
```

## Carthage

Add CucumberSwift to your `Cartfile`:

```text
github "cucumberswift/CucumberSwift"
```

Then run `carthage update --use-xcframeworks`.

## Next steps

* [Getting started tutorial](https://cucumberswift.org/CucumberSwift/tutorials/tutorial-table-of-contents/)
* [Documentation](https://cucumberswift.org/CucumberSwift/documentation/cucumberswift/)
* [Source code and issues](https://github.com/cucumberswift/CucumberSwift)
* [Community Slack](https://github.com/cucumberswift/CucumberSwift#community--support)
