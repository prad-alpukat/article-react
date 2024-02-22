function dateFormatter(date) {
    const newDate = new Date(date)

    return newDate.toLocaleDateString('in-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export { dateFormatter }