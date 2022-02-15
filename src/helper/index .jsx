// lấy ngày tháng hiện tại để hiển thị trên header_top cạnh cái giờ đang chạy
export const getCurrentDate = (separator = '') => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear(); 
    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
}

