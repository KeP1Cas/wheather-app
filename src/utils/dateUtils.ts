class DateUtils {
  getMonthName = (monthNumber: number) => {
    const monthRecord = {
      1: "jan",
      2: "feb",
      3: "mar",
      4: "apr",
      5: "may",
      6: "june",
      7: "july",
      8: "aug",
      9: "sept",
      10: "oct",
      11: "nov",
      12: "dec",
    };

    return (monthRecord as Record<number, string>)[monthNumber];
  };

  getDateFromMillisecond = (ms: number) => {
    return new Date(ms * 1000);
  };

  getDateForUI = (ms: number) => {
    const date = this.getDateFromMillisecond(ms);

    const day = date.getDate();
    const month = this.getMonthName(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };
}

const dateUtils = new DateUtils();

export { dateUtils };
