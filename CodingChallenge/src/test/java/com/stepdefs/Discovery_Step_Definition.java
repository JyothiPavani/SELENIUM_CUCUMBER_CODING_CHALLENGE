package com.stepdefs;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.Reusable.FileOperations;
import com.Reusable.WebBrowser;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Discovery_Step_Definition {
	
	public WebDriver driver= null;
	WebBrowser _driver =null;
	protected Scenario scenario = null;
	public List<String> list = null;
	
	@Before
	public void setUp(Scenario scenario)throws Exception {
		this.scenario = scenario;
		Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255");
		Runtime.getRuntime().exec("taskkill /F /IM iexplore.exe");
		Runtime.getRuntime().exec("taskkill /F /IM chrome.exe");
		Runtime.getRuntime().exec("taskkill /F /IM chromedriver.exe");
		_driver = new WebBrowser();
		this.driver =  _driver.getCurrentDriver();
	}
	

	@Given("^Launch the URL \"([^\"]*)\"$")
	public void launch_the_URL(String arg1) throws Throwable {
		_driver.get(FileOperations.DerivergetProperty(arg1));
		
	}
	
	@Then("^Select the Option \"([^\"]*)\"$")
	public void select_the_Option(String arg1) throws Throwable {
		_driver.selectDropdownListOptionWithPartialText(driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg1))),arg1);
	}

	
	@Then("^Click on Button \"([^\"]*)\"$")
	public void click_on_Button(String arg1) throws Throwable {
		_driver.click(driver.findElement(By.xpath(FileOperations.DerivergetProperty(arg1))));
		
	}
	
	@Then("^Select a List of Values \"([^\"]*)\" based on attribute \"([^\"]*)\":$")
	public void select_a_List_of_Values_based_on_attribute(String arg1, String arg2, DataTable arg3) throws Throwable {
		list = arg3.asList(String.class);
		for(int i =1;i<list.size();i++)
		{
			String arrayList = list.get(i).toString();
			Boolean flag = _driver.isOptionPresentInDropDownListOptions(driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg1))),arrayList);
			int row = _driver.getRowNumOfOption(driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg1))),arrayList);
			if(flag)
			{
				Boolean flag1 = driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg2)+"["+row+"]"+"//"+arg2)).size()>0;
				if(flag1)
				{
					try
					{
						_driver.selectfromList(driver.findElement(By.xpath(FileOperations.DerivergetProperty(arg2)+"["+row+"]"+"//"+arg2)));
					}
					catch(Exception e)
					{
						_driver.scrollwindowUp();
						_driver.selectfromList(driver.findElement(By.xpath(FileOperations.DerivergetProperty(arg2)+"["+row+"]"+"//"+arg2)));
					}
				}
				
			}
				
		}
	}
	@Then("^ScrollDown$")
	public void scrolldown() throws Throwable {
		_driver.scrollwindowdown();
		_driver.scrollwindowdown();
	    
	}
	@Then("^Validate the List \"([^\"]*)\"$")
	public void validate_the_List(String arg1) throws Throwable {
	    for(String expected:list)
	    {
	    	Boolean flag = _driver.isTextPresent(driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg1))),expected);
	    	if(flag)
	    	{
	    		String actual = _driver.getTextFromList(driver.findElements(By.xpath(FileOperations.DerivergetProperty(arg1))),expected);
	    		Assert.assertTrue(actual.contains(expected));
	    		System.out.println("Value from ArrayLIst:"+expected+" Equals value from My Videos:"+actual);
	    	}
	    		
	    }
	}
	
    



}
