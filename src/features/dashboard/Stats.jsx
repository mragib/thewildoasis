import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
function Stats({ bookings, confirmStays, numOfDays, cabinRooms }) {
  // 1 Number of Bookings
  const numOfBookings = bookings.length;

  //   2. Total Sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //  3.check ins
  const checkings = confirmStays.length;

  // 4. Occupency rate
  const occupency =
    confirmStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numOfDays * cabinRooms);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkings}
      />
      <Stat
        title="Occupency rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupency * 100) + "%"}
      />
    </>
  );
}

export default Stats;
