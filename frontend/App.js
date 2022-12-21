import React, {StrictMode} from "react";
import {SimpleComponent} from "./components/SimpleComponent";
import {SimpleUncoveredComponent} from "./components/SimpleUncoveredComponent";

export const App = () => <StrictMode>
    <SimpleComponent />
    <SimpleUncoveredComponent />
</StrictMode>;