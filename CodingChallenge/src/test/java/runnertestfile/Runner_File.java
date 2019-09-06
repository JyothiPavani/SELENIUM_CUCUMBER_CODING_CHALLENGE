package runnertestfile;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;

@RunWith(ExtendedCucumber.class)

@ExtendedCucumberOptions(jsonReport = "target/cucumber.json",
        //retryCount = 1,
        detailedReport = true,
        overviewReport = true,
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },
        screenShotLocation = "Screens/",
        screenShotSize = "100px",
        outputFolder = "Reports")
@CucumberOptions(plugin = { "html:target/cucumber-html-report",
        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
        "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml" },
       	features = { "classpath:features" },
        glue = {"com.stepdefs",},
        tags = {"@RunDiscovery"})
public class Runner_File {

}
