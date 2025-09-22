const calculateAge = () => {
    const dob = document.getElementById("user-date");
    const output = document.getElementById("output");

    const userDate = new Date(dob.value);
    const currentDate = new Date();

    if (!dob.value) {
        output.innerText = "⚠️ Please select your date of birth.";
        return;
    }

    const currentDobYear = currentDate.getFullYear();
    const currentDobMonth = currentDate.getMonth();
    const currentDobDate = currentDate.getDate();

    const userDobYear = userDate.getFullYear();
    const userDobMonth = userDate.getMonth();
    const userDobDate = userDate.getDate();

    let ageInYears = currentDobYear - userDobYear;
    let ageInMonths = currentDobMonth - userDobMonth;

    if (ageInMonths < 0 || (ageInMonths === 0 && currentDobDate < userDobDate)) {
        ageInYears--;
        ageInMonths += 12;
    }

    output.innerText = `User's Current Age is ${ageInYears} Year(s) and ${ageInMonths} Month(s)`;
};
