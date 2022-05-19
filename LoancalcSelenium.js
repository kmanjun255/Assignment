package Practicel; 
import java.time.Duration; 
import org.openqa.selenium.By; 
import org.openqa.selenium.WebElement; 
import org.openqa.selenium.chrome.ChromeDriver; 
import org.openqa.selenium.support.ui.Select; 
import org.testng.Assert; 
import org.testng.annotations.Test; 

public class ANZCalc {

@Test 
public static void main(String[] args) { 
// TODO Auto-generated method stub 
System.setProperty("webdriver.chrome.driver","D:\\Users\\kmanjun\\Downloads\\chromedriver_win32\\chromedriver.exe"); 
ChromeDriver driver = new ChromeDriver(); 
String baseUrl = "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/"; 
 // launch Fire fox and direct it to the Base URL

 driver.get(baseUrl);

 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10)); 

WebElement application type = driver.findElement(By.xpath("//input[@id='application_type_single']"));//Application Type 
WebElement number_of_dependants_option = driver.findElement(By.xpath("//select[@title='Number of dependants']")); //Number of dependants  drop down
 Select se = new Select(number_of_dependants_option); 

WebElement property_type = driver.findElement(By.xpath("//*[@id='borrow_type_home']")); //property Type 

WebElement your_earnings = driver.findElement(By.xpath("//input[@aria-labelledby='q2q1']")); // Your Earnings Input Box
WebElement your_other_income = driver.findElement(By.xpath("//input[@aria-labelledby='q2q2']")); //Your other Income 
WebElement living_expenses = driver.findElement(By.xpath("//input[@aria-labelledby='q3q1']")); //Living Expenses 
WebElement current_home_loan_repayments = driver.findElement(By.xpath("//input[@aria-labelledby='q3q2']',")); //Current Home Loan Repayments 
WebElement other_loan_repayments = driver.findElement(By.xpath("//input[@aria-iabelledby='q3q3']")); //Current Hbme Loan Repayments 
WebElement other_commitments = driver.findElement(By.xpath("//input[@aria-labelledby='q3q4]")); //Other Commitments 
WebElement total_credit_card_limits = driver.findElemeht(By.xpath("//input[@aria-labelledby='q3q5']")); //Current Home Loan Repayments 
WebElement calculate_button = driver.findElement(By.xpath("//button[contains(., 'Work-out how much I could borrow')]")); 

application_type.click(); 
property_type.click(); 
se.selectByVisibleText("0"); 

your_earnings.sendKeys("80000"); 

your_other_income.sendKeys("10000"): 
 
living_expenses.sendKeys("500"); 
current_home_loan_repayments.sendKeys("0");
 other_loan_repayments.sendkeys("100");
 other_commitments.sendKeys("0"); 
total_credit_cand_limits.sendkeys("10,000"); 
calculate_button.click(); 
WebElement text = driver.findElement(By.id("borrowResultTextAmount")); 
System.out.println(text.gettext()); 

Assert.assertEquals("479,000",text.gettext());

driver.manage().timouts().implicitlyWait(Duration.ofSeconds(10)); 

WebElement start_over_button = driver.findElement(By.xpath("//button[@class='start-over')")); 
start_over_button.click(); 
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10)); 
living_expenses.sendKeys("1"); 
calculate_button. click(); 

WebElement error_text = driver.findElement(By.xpath("//span[@class='borrow_error _text']")); 
System.out.println (error_text.getText());
 Assert.assertEquals("Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500.",error_text.getText());


 driver.close(); 
