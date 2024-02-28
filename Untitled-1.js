  




 function investmentinfo(){
    const occupation = document.getElementById('occupation').value;
    const employer = document.getElementById('employer').value;
    const Sourceofincome = document.getElementById('soi').value;
    const risktolerance = document.getElementById('risktolerance').value;
    const officeaddress = document.getElementById('oa').value;
    const InvestmentObjective = document.getElementById('io').value;
    const updated = 'false';

    if (occupation !== '' && employer !== '' && Sourceofincome !== '' && risktolerance !== '' && officeaddress !== '' && InvestmentObjective !== '') {
        localStorage.setItem('occupation', occupation);
        localStorage.setItem('employer', employer);
        localStorage.setItem('soi', Sourceofincome);
        localStorage.setItem('risktolerance', risktolerance);
        localStorage.setItem('oa', officeaddress);
        localStorage.setItem('io', InvestmentObjective);
        localStorage.setItem('profileupdated', updated);
        alert('Registration Complete');
        window.location.href = 'bankinfo.html';
    } else {
        alert('Kindly fill all fields');
    }
}