export const dropDownList = [
  {
    navMenu: "Features",
    dropDowns: [
      {
        icon: new URL("../assets/images/icon-todo.svg", import.meta.url).href,
        name: "Todo List",
      },
      {
        icon: new URL("../assets/images/icon-calendar.svg", import.meta.url)
          .href,
        name: "Calender",
      },
      {
        icon: new URL("../assets/images/icon-reminders.svg", import.meta.url)
          .href,
        name: "Reminders",
      },
      {
        icon: new URL("../assets/images/icon-planning.svg", import.meta.url)
          .href,
        name: "Planning",
      },
    ],
  },
  {
    navMenu: "Company",
    dropDowns: [
      {
        icon: "",
        name: "History",
      },
      {
        icon: "",
        name: "Our Team",
      },
      {
        icon: "",
        name: "Blog",
      },
    ],
  },
  {
    navMenu: "Careers",
    dropDowns: [],
  },
  {
    navMenu: "About",
    dropDowns: [],
  },
];
