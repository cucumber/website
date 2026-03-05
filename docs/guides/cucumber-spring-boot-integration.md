# Cucumber + Spring Boot Integration

This guide explains how to integrate **Cucumber** with **Spring Boot** to write behavior-driven integration tests.

Cucumber allows writing executable specifications using **Gherkin syntax**, while Spring Boot provides dependency injection and application context management for tests.

---

# Prerequisites

Before integrating Cucumber with Spring Boot, ensure you have:

- Java 11 or later
- Maven or Gradle
- A Spring Boot application
- Basic knowledge of Cucumber and Gherkin syntax

---

# Adding Dependencies

Add the following dependencies to your project.

## Maven

```xml
<dependencies>

    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-java</artifactId>
        <scope>test</scope>
    </dependency>

    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-spring</artifactId>
        <scope>test</scope>
    </dependency>

    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-junit-platform-engine</artifactId>
        <scope>test</scope>
    </dependency>

</dependencies>
```
## Recommended Project Structure

A typical Spring Boot + Cucumber project structure:

```text
      src
        └── test
        ├── java
        │     ├── config
        │     │     └── CucumberSpringConfiguration.java
        │     │
        │     ├── runner
        │     │     └── RunCucumberTest.java
        │     │
        │     └── steps
        │           └── StepDefinitions.java
        │
        └── resources
        └── features
        └── sample.feature
```

This structure separates configuration, runners, step definitions, and feature files.

---

## Configure Spring Boot Context
```java
package com.example.config;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest
public class CucumberSpringConfiguration {
}
```
This configuration enables:

- Spring dependency injection

- Spring application context

- Access to application beans during test execution

## Writing Step Definitions
Step definitions implement the steps defined in feature files.

Because Spring Boot context is loaded, Spring beans can be injected.

```java
package com.example.steps;

import io.cucumber.java.en.Given;
import org.springframework.stereotype.Component;

@Component
public class StepDefinitions {

    @Given("the application is running")
    public void the_application_is_running() {

        // Add validation logic here

    }
}
```
You can also inject services using:
```java
@Autowired
private OrderService orderService;
```

## Writing Feature Files
Feature files describe application behavior using Gherkin syntax.
Example:
```gherkin
Feature: Application health check

  Scenario: Application starts successfully
    Given the application is running
```


By combining:

Cucumber's readable test scenarios , Spring Boot's dependency injection and configuration teams can build maintainable and scalable integration tests for modern Java applications.
