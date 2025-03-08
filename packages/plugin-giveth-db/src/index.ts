import type { Plugin } from "@elizaos/core";
import {queryDBAction} from "./actions/queryDB";

export const givethDBPlugin: Plugin = {
    name: "Giveth DB",
    description: "Giveth DB agent",
    actions: [ queryDBAction ],
};

export default givethDBPlugin;
