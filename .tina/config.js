import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINACMS_CLIENT_ID, // Get this from tina.io
  token: process.env.TINACMS_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      {
        label: "Team",
        name: "team",
        path: "site/content/team",
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "degree",
                label: "Ausbildung",
              },
              {
                type: "image",
                name: "portrait_image",
                label: "Portrait",
              },
              {
                type: "image",
                name: "color_image",
                label: "Mondbild",
              },
            ],
            label: "teammitglied",
            name: "teammitglied",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "image",
                name: "image",
                label: "image",
              },
            ],
            label: "team",
            name: "team",
          },
        ],
      },
      {
        label: "Angebot",
        name: "angebot",
        path: "site/content/angebot",
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "string",
                name: "titlecolor",
                label: "Titelfarbe",
                ui: {
                  component: "color",
                },
              },
              {
                type: "number",
                name: "weight",
                label: "Gewichtung",
              },
              {
                type: "string",
                name: "duration",
                label: "Dauer",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "timing",
                label: "Zeitpunkt",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "costs",
                label: "Kosten",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "on_call_costs",
                label: "Pikettentschädigung",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "location_area",
                label: "Einsatzgebiet",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "language",
                label: "Sprache",
              },
              {
                type: "string",
                name: "location",
                label: "Ort",
                ui: {
                  component: "textarea",
                },
              },
            ],
            label: "angebot",
            name: "angebot",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "Titel",
              },
              {
                type: "number",
                name: "weight",
                label: "Gewichtung",
              },
              {
                type: "image",
                name: "image_menu",
                label: "Bild im Menu",
              },
              {
                type: "image",
                name: "image_category",
                label: "Bild",
              },
              {
                type: "image",
                name: "image_category_mobile",
                label: "Bild Mobile",
              },
              {
                type: "image",
                name: "image_contact",
                label: "Bild Anfrage",
              },
            ],
            label: "angebotskategorie",
            name: "angebotskategorie",
          },
        ],
      },
      {
        label: "Blog",
        name: "blog",
        path: "site/content/blog",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
        ],
      },
      {
        label: "Feedback",
        name: "feedback",
        path: "site/content/feedback",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titel",
          },
          {
            type: "image",
            name: "image",
            label: "Bild",
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
          },
        ],
      },
      {
        label: "Kontakt",
        name: "kontakt",
        path: "site/content/kontakt",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
    ],
  },
});
