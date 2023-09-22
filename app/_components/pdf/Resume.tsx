"use client";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { ResumeType } from "@/type";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginVertical: "45px",
    display: "flex",
    flexDirection: "row",
  },
  headerLeft: {
    width: "40%",
    display: "flex",
  },
  headerRight: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    transform: "translateX(-50px)",
  },
  section: {
    paddingLeft: 30,
    paddingRight: 50,
    display: "flex",
    flexDirection: "row",
  },
  sectionLeft: {
    width: "40%",
    display: "flex",
  },
  sectionRight: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
  },
  redLine: {
    marginLeft: "1.5px",
    borderLeft: "solid",
    borderLeftWidth: "3px",
    borderColor: "#cd2027",
    padding: "0 10px",
  },
  grayLine: {
    marginLeft: "2.5px",
    borderLeft: "solid",
    borderLeftWidth: "1px",
    borderColor: "#595959",
    paddingLeft: "18px",
  },
  text9: {
    fontSize: 9,
  },
  experienceCircle: {
    height: "6px",
    width: "6px",
    backgroundColor: "#cd2027",
    borderRadius: "50%",
    marginRight: "16px",
  },
  footer: {
    backgroundColor: "#212121",
    position: "absolute",
    bottom: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "30px",
    paddingRight: "15px",
    color: "white",
    width: "100%",
    height: "17.2mm",
    alignItems: "center",
    fontSize: 9,
  },
});

// const data = {
//   name: "Magnus Ingnes Sagmo",
//   title: "Konsulent",
//   phone: "+47 918 00 994",
//   email: "magnus.sagmo@juniorconsulting.com",
//   description:
//     "Magnus går tredjeåret på master i Datateknologi ved NTNU, med spesialisering innen databaseteknologi.  Han liker å jobbe prosjektbasert, og har en iver etter å lære nye ting, samt løse problemer på en god og effektiv måte.",
//   background: [
//     {
//       from: "2020",
//       to: "2025",
//       title: "MsC Datateknologi",
//       institution: "NTNU",
//     },
//   ],
//   engagements: [
//     {
//       from: "2021",
//       to: "2022",
//       title: "Gruppeansvarlig",
//       institution: "Abakus' hovedstyre",
//     },
//     {
//       from: "2020",
//       to: "d.d.",
//       title: "Prosjektmedarbeider",
//       institution: "Abakus' arragementskomité",
//     },
//     {
//       from: "2021",
//       to: "2022",
//       title: "Bedriftskontakt",
//       institution: "itDAGENE 2022",
//     },
//   ],
//   expertise: [
//     {
//       title: "React, Next.js, TypeScript",
//       projects: [{ project: "6 prosjekter" }, { project: "1 prosjekt" }],
//     },
//     {
//       title: "Apputvikling",
//       projects: [{ project: "1 prosjekt" }],
//     },
//     {
//       title: "REST API",
//       projects: [{ project: "3 prosjekter" }],
//     },
//   ],
//   experience: [
//     {
//       employer: "Lillemini",
//       title: "Teknisk konsulent",
//       from: "Mar 2021",
//       to: "d.d.",
//       description:
//         "Magnus har vært utleid til Lillemini som app-utvikler og prosjektleder. Der har han primært jobbet med videreutvikling og oppgradering av Flutter-app, med CMS i Sanity og tilleggstjenester i Firebase, Sentry og RevenueCat.",
//     },
//     {
//       employer: "Progit Consulting",
//       title: "Fullstack-utvikler",
//       from: "Jun 2023",
//       to: "Aug 2023.",
//       description:
//         "I et team på tre jobbed Magnus med å utvikle et kustomiserbart dashboard for TaskCtrl. Hans fokusområde var å lage det nødvendige API-et, som også skulle være grunnlaget for hele den nye backenden til TaskCtrl.",
//     },
//     {
//       employer: "Equinor",
//       title: "Summer intern",
//       from: "Jun 2022",
//       to: "Aug 2022.",
//       description:
//         "I løpet av sommeren utviklet Magnus sammen med en annen sommerstudent et optimaliseringsverktøy til bruk i prosjektering av nye hydrogen-prosjekter. Prosjektet hadde en server skrevet med Flask, og et brukergrensesnitt i React.",
//     },
//     {
//       employer: "Stavanger Høyre",
//       title: "Freelance webutvikler",
//       from: "Feb 2023",
//       to: "Aug 2023",
//       description:
//         "Magnus jobber for tiden med en nettside for Høyre Stavanger. Nettsiden skal fungere som en informasjonskanal, og er tiltenkt en sentral rolle i valgkampen inn mot høstens kommunevalg. \n \n Siden er en web-applikasjon skrevet i NextJS 13, med Sanity som database og CMS, og Amplitude for dataanalyse. Det er et stort fokus på at den skal være lett å betjene for Høyre helt selvstendig etter overlevert prosjekt.",
//     },
//   ],
// };

interface Props {
  data: ResumeType;
}
const Resume = ({ data }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <Image
            style={{
              marginLeft: "100px",
              height: "120px",
              width: "120px",
              borderRadius: "50%",
            }}
            src={builder
              .image(data.employee.image)
              .width(300)
              .height(300)
              .url()}
          />
        </View>
        <View style={styles.headerRight}>
          <Text style={{ color: "#445663", fontSize: 12, fontWeight: "bold" }}>
            {data.title}
          </Text>
          <Text style={{ color: "#445663", fontSize: 24, marginVertical: 3 }}>
            {data.employee.name}
          </Text>
          <Text style={{ fontSize: 11 }}>{data.employee.bio}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionLeft}>
          <Text
            style={[
              styles.redLine,
              {
                color: "#595959",
                fontSize: 16,
                fontWeight: "bold",
              },
            ]}
          >
            Bakgrunn{" "}
          </Text>
          <View style={{ paddingLeft: "10px", color: "#445663" }}>
            {data.background.map((item) => (
              <View style={{ marginTop: "15px" }}>
                <Text
                  style={{ fontSize: 9 }}
                >{`(${item.from} - ${item.to})`}</Text>
                <Text style={{ fontSize: 14, marginTop: "2px" }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, marginTop: "2px" }}>
                  {item.intitution}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={[
              styles.redLine,
              {
                color: "#595959",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: "20px",
              },
            ]}
          >
            Engasjement{" "}
          </Text>
          <View style={{ paddingLeft: "10px", color: "#445663" }}>
            {data.engagement.map((item) => (
              <View style={{ marginTop: "15px" }}>
                <Text
                  style={{ fontSize: 9 }}
                >{`(${item.from} - ${item.to})`}</Text>
                <Text style={{ fontSize: 14, marginTop: "2px" }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, marginTop: "2px" }}>
                  {item.organisation}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={[
              styles.redLine,
              {
                color: "#595959",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: "20px",
              },
            ]}
          >
            Fageskpertise{" "}
          </Text>
          <View style={{ paddingLeft: "10px", color: "#445663" }}>
            {data.expertise.map((item) => (
              <View style={{ marginTop: "15px" }}>
                <Text style={{ fontSize: 14, marginTop: "2px" }}>
                  {item.title}
                </Text>

                <View
                  style={{
                    display: "flex",
                    marginTop: "2px",
                    flexDirection: "column",
                  }}
                >
                  {item.projects.map((project) => (
                    <View>
                      <Text style={{ fontSize: 9 }}>{project}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={[styles.sectionRight, { color: "#445663" }]}>
          {sectionText("Erfaring")}
          <View style={{ marginTop: "15px" }}>
            {data.experience.map((item, index) => (
              <>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.experienceCircle}>
                    <div></div>
                  </View>
                  <Text style={{ fontSize: 9, marginTop: "6px" }}>
                    {item.employer}
                  </Text>
                </View>
                <View
                  style={[
                    styles.grayLine,
                    {
                      paddingBottom: `${
                        index == data.experience.length - 1 ? "" : "15px"
                      }`,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 14, marginTop: "6px" }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: "2px",
                      fontWeight: "bold",
                    }}
                  >{`${item.from} - ${item.to}`}</Text>
                  <Text style={{ fontSize: 9, marginTop: "2px" }}>
                    {item.description}
                  </Text>
                </View>
              </>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>{data.employee.email}</Text>
          <Text style={{ marginHorizontal: "3px" }}>|</Text>
          <Text>{data.employee.phone}</Text>
        </View>

        <Image
          style={{
            height: "20px",
          }}
          // src={"../../../public/jrc-logo-white.png"}
          src={
            "data:image/png;base64,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"
          }
        />
      </View>
    </Page>
  </Document>
);

const sectionText = (text: String) => {
  return (
    <Text
      style={[
        styles.redLine,
        {
          color: "#595959",
          fontSize: 16,
          fontWeight: "bold",
        },
      ]}
    >
      {text}
    </Text>
  );
};

const ResumeView = ({ data }: Props) => {
  return (
    <PDFViewer
      className="absolute"
      width={"100%"}
      height={"100%"}
      showToolbar={true}
    >
      <Resume data={data} />
    </PDFViewer>
  );
};
export default ResumeView;
