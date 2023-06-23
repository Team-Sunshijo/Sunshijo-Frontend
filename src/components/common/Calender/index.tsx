import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { useState } from "react";
import { CalendarIcon } from '../../../assets/icons';
import styled from 'styled-components';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <DatePickerComponent
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat = "yyyy-MM-dd"
        locale={ko}
        showPopperArrow={false}
        placeholderText="yyyy-mm-dd"
      />
    </>
  );
};

const DatePickerComponent = styled(DatePicker)`
  float: left;
  width: 241px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.White};
  background: no-repeat calc(100% - 25px) center url(${CalendarIcon});
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  border-radius: 5px;
  padding: 5px 25px;
  font: ${({ theme }) => theme.font.Regular24};
  :focus {
    border: 1px;
    outline-color: ${({ theme }) => theme.colors.Main};
  }
 

`;



export default Calendar;
