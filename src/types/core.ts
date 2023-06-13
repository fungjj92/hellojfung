import type { Page } from "lume/core.ts";

export interface CustomPage extends Page {
    isExcerptTruncated: boolean;
}
