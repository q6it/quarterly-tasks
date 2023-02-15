# React Quarter Task Planner

This is a React app that displays a table with the current quarter of the year, and thirteen columns representing quarter weeks. The app allow to add tasks with description with the start and end date of the task.
The result of adding the task will show it to the appropriate weeks in the table. The app also includes pagination to navigate between the quarters.

## Installation

To run this app locally, you need to have Node.js and NPM (Node Package Manager) installed on your machine. You can download Node.js and NPM from the official website: https://nodejs.org/en/.

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal or command prompt.
3. Run the following command to install the required dependencies:

```bash
npm install
```

4. Create a .env file with parameters VITE_PORT={your_port}

5. Once the installation is complete, run the following command to start the app:

##### Run development server

```sh
npm run dev
```

##### Build for production

```sh
npm run build
```

##### Preview production version

```sh
npm run preview
```

## Author

👤 **Andrei Sittsenko**

-   Github: [@q6it](https://github.com/q6it)
-   LinkedIn: [@andrei-sittsenko](https://linkedin.com/in/andrei-sittsenko)

5. The app should now be running at `http://localhost:3000`.

## Usage

The table displays the current quarter months and weeks.

You can use the **Next** and **Previous** buttons to navigate between the quarters.

## Dependencies

This app uses the following libraries:

-   `React`: A JavaScript library for building user interfaces.
-   `dayjs`: A lightweight and fast date/time library for parsing, validating, manipulating, and formatting dates.
-   `dayjs-ext`: A plugin for dayjs that adds additional features such as week numbers.
-   `tailwindcss`: A utility-first CSS framework for rapidly building custom designs.

## Contributing

If you find any bugs or issues with the app, please feel free to create an issue on this repository.

If you would like to contribute to the project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
