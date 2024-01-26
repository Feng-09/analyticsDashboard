function Extra() {
    const date = new Date()
    const year = date.getFullYear()
    const monthNo = date.getMonth()
    const day = date.getDate()
    let month;

    switch (monthNo) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    let display = `${month} ${day}, ${year}`

    return (
        <h2 className='font-inter text-sm font-semibold leading-[1.375rem] text-[#26282C] dark:text-slate-300'>{display}</h2>
    )
}

export default Extra