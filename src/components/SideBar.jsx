import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Divider = () => <hr className="sidebar-hr" />;

const SideBarIcon = ({ icon, text = "tooltip!" }) => (
  <div className="sidebar-icon animation group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBar = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 h-screen w-16 m-0 bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size={28} />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size={32} />} />
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<FaPoo size={20} />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

export default SideBar;
