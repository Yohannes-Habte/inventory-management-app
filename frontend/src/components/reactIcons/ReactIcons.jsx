import React from "react";
import { FaUser } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { RiFileZipFill } from "react-icons/ri";
import { SiGooglestreetview } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { GrCreditCard } from "react-icons/gr";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { MdArtTrack } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa";
import { SiEventbrite } from "react-icons/si";
import { FcAdvertising } from "react-icons/fc";
import { FaRProject } from "react-icons/fa";
import { IoMdGitPullRequest } from "react-icons/io";
import { RiCalendarTodoLine } from "react-icons/ri";
import { FcManager } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaParagraph } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { BiCategory } from "react-icons/bi";
import { FaCriticalRole } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineViewCompact } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FcSerialTasks } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

const ReactIcons = () => {
  // user icons
  const userIcon = <FaUser />;
  const usersIcon = <FaUsers />;
  const adminIcon = <RiAdminFill />;
  const managerIcon = <FcManager />;
  const accountIcon = <MdAccountCircle />;
  const profesionIcon = <FaUserGraduate />;

  // Email icon
  const emailIcon = <MdEmail />;

  // Phone icons
  const phoneIcon = <MdPhoneInTalk />;

  // Password icons
  const passwordIcon = <RiLockPasswordFill />;
  const visiblePasswordIcon = <AiFillEyeInvisible />;
  const invisiblePasswordIcon = <HiOutlineEye />;

  // Social security number
  const socialSecurityNoIcon = <RiLockPasswordFill />;

  // Password icons
  const uploadIcon = <FaCloudUploadAlt />;

  // Password icons
  const messageIcon = <MdMessage />;

  // Close and delete icons
  const closeIcon = <MdClose />;
  const trashIcon = <MdDelete />;

  // Driving icon
  const drivingIcon = <FaCar />;

  // Address icons
  const addressIcon = <FaAddressCard />;
  const streetIcon = <SiGooglestreetview />;
  const zipCodeIcon = <RiFileZipFill />;
  const locationIcon = <IoLocation />;

  // Social media icons
  const twitterIcon = <FaTwitterSquare />;
  const facebookIcon = <FaFacebookSquare />;
  const linkedInIcon = <FaLinkedin />;
  const instagramIcon = <FaInstagramSquare />;
  const youtubeIcon = <FaYoutubeSquare />;
  const githupIcon = <FaGithubSquare />;
  const tiktokIcon = <FaTiktok />;

  // Bank Icons
  const bankIcon = <BsBank />;
  const bankCardIcon = <GrCreditCard />;
  const swiftIcon = <BsCreditCard2FrontFill />;

  // Bar and arrow icons
  const barIcon = <FaBars />;
  const rightArrowIcon = <MdKeyboardArrowRight />;
  const leftArrowIcon = <MdKeyboardArrowLeft />;
  const downArrowIcon = <MdKeyboardArrowDown />;
  const upArrowIcon = <MdKeyboardArrowUp />;

  // Language icon
  const languageIcon = <GrLanguage />;

  // Order icon
  const orderIcon = <IoCartSharp />;

  // logout icon
  const logoutIcon = <IoMdLogOut />;

  // Department icon
  const depIcon = <FcDepartment />;

  // Tracking icon
  const trackIcon = <MdArtTrack />;

  // Refund Icon
  const refundIcon = <RiRefund2Fill />;
  // Refund Icon
  const courseIcon = <SiCoursera />;

  // Product Icon
  const productIcon = <FaProductHunt />;

  // Event Icon
  const eventIcon = <SiEventbrite />;

  // job icon
  const jobIcon = <FcAdvertising />;

  // job icon
  const projectIcon = <FaRProject />;

  // Request icon
  const requestIcon = <IoMdGitPullRequest />;

  // To do icon
  const todoIcon = <RiCalendarTodoLine />;

  // Paragraph icon
  const paragraphIcon = <FaParagraph />;

  // Dashboard icon
  const dashboardIcon = <MdDashboard />;

  // Rating icon
  const ratingIcon = <FcRating />;

  // Category icon
  const categoryIcon = <BiCategory />;

  // Role icon
  const roleIcon = <FaCriticalRole />;

  // Date icon
  const dateIcon = <MdDateRange />;

  // Unversity icon
  const universityIcon = <FaUniversity />;

  // Unversity icon
  const statusIcon = <GrStatusGood />;

  // website icon
  const websiteIcon = <CgWebsite />;

  // price icon

  // Edit Icon
  const editIcon = <FaRegEdit />;

  // Edit Icon
  const searchIcon = <FaSearch />;

  // Summary Icon
  const summaryIcon = <MdOutlineViewCompact />;

  // Purchase, price, quantity, and invoice Icons
  const purchaseIcon = <BiSolidPurchaseTag />;
  const invoiceIcon = <FaFileInvoiceDollar />;
  const priceIcon = <FaMoneyCheckAlt />;
  const quantityIcon = <MdOutlineProductionQuantityLimits />;

  // Print Icon
  const printIcon = <FaPrint />;

  // Serial icon and tag icon
  const serialIcon = <FcSerialTasks />;
  const tagIcon = <FaTag />;

  // Check Icon
  const checkIcon = <FaCheckSquare />;

  // Check Icon
  const addIcon = <MdAddBox />;

  return {
    userIcon,
    usersIcon,
    phoneIcon,
    emailIcon,
    passwordIcon,
    invisiblePasswordIcon,
    visiblePasswordIcon,
    closeIcon,
    trashIcon,
    paragraphIcon,
    addressIcon,
    streetIcon,
    zipCodeIcon,
    locationIcon,
    uploadIcon,
    messageIcon,
    drivingIcon,
    socialSecurityNoIcon,
    twitterIcon,
    facebookIcon,
    linkedInIcon,
    instagramIcon,
    youtubeIcon,
    githupIcon,
    tiktokIcon,
    bankIcon,
    bankCardIcon,
    swiftIcon,
    barIcon,
    rightArrowIcon,
    leftArrowIcon,
    upArrowIcon,
    downArrowIcon,
    languageIcon,
    orderIcon,
    logoutIcon,
    depIcon,
    adminIcon,
    trackIcon,
    refundIcon,
    courseIcon,
    productIcon,
    eventIcon,
    jobIcon,
    projectIcon,
    requestIcon,
    todoIcon,
    managerIcon,
    accountIcon,
    profesionIcon,
    dashboardIcon,
    ratingIcon,
    categoryIcon,
    roleIcon,
    dateIcon,
    universityIcon,
    statusIcon,
    websiteIcon,
    editIcon,
    searchIcon,
    summaryIcon,
    purchaseIcon,
    priceIcon,
    invoiceIcon,
    printIcon,
    serialIcon,
    quantityIcon,
    tagIcon,
    checkIcon,
    addIcon,
  };
};

export default ReactIcons;
