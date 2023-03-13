import { type ModManagerOutput } from "./update-database/fetch-mod-manager.js";

export interface BaseMod {
  name: string;
  uniqueName: string;
  slug: string;
  description: string;
  author: string;
  repo: string;
  latestReleaseDate: string;
  firstReleaseDate: string;
  repoUpdatedAt: string;
  databaseEntryUpdatedAt: string;
  downloadUrl: string;
  downloadCount: number;
  version: string;
  alpha?: boolean;
  required?: boolean;
  utility?: boolean;
  parent?: string;
  authorDisplay?: string;
  readme?: {
    downloadUrl?: string;
    htmlUrl?: string;
  };
  prerelease?: {
    version: string;
    downloadUrl: string;
    date: string;
  };
  tags: string[];
  thumbnail: {
    main?: string;
    openGraph?: string;
  };
  latestReleaseDescription: string;
  latestPrereleaseDescription: string;
}

export interface OutputMod extends BaseMod {
  viewCount: number;
  weeklyViewCount: number;
  installCount: number;
  weeklyInstallCount: number;
}

export type DatabaseOutput = {
  modManager: ModManagerOutput;
  releases: OutputMod[];
  alphaReleases: OutputMod[];
};
