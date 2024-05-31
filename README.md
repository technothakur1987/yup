install yup using npm i yup
import * as Yup from yup

🔹 What is Yup?
Yup is a JavaScript schema builder for value parsing and validation. It's a great tool for handling complex validation logic in a clean and readable manner.

🔹 Project Overview:
I created a registration form with the following fields:

First Name
Last Name
Email
Phone Number
Password & Confirm Password
Age
Gender
Interests
Birth Date



🔹 Validation Rules:

First Name & Last Name: Required fields.
Email: Must be a valid email address.
Phone Number: Must be exactly 10 digits.
Password: Minimum 8 and maximum 10 characters, including uppercase, lowercase, number, and special character.
Confirm Password: Matches the password field.
Age: Must be between 18 and 100.
Gender: Required field.
Interests: At least one interest must be selected.
Birth Date: Valid date and required field.


Live Link :https://yupreact19.netlify.app/
