import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import * as yup from 'yup';

import { translation } from './constants/schemas';

yup.setLocale(translation);

import { createRouter } from "./app/router";
import { RouterProvider } from "react-router-dom";

const Root = () => {
    const router = createRouter();

    return (
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    );
};

export default Root;
