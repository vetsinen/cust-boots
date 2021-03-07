function dayOfWeek(strdate) {
    d = new Date(strdate)
    const days =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[d.getDay()]
}
console.log(dayOfWeek("2021-03-08"))

