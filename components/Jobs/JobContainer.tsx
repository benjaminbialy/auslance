import React from "react";
import JobFilters from "./JobFilters";
import JobInterface from "./JobInterface";
import JobScroller from "./JobScroller";
import JobSideBar from "./JobSideBar";
import JobsNav from "./JobsNav";

function JobContainer() {
  return (
    <div className="flex justify-center">
      <JobSideBar />
      <div className="flex flex-col bg-gray-400 max-w-5xl">
        <JobsNav />
        <JobFilters savedFilters={[]} />
        <JobScroller jobs={jobs} />
      </div>
    </div>
  );
}

export default JobContainer;

const jobs: Array<JobInterface> = [
  {
    id: 12,
    title: "Aperiam molestias tenetur aut sint. Quasi omnis ut maxime. ",
    location: "Dolor dolorem",
    employerName: "nemo",
    description:
      "Aut ut et qui velit maiores in. Nobis quia dolorem est perferendis repudiandae cum nam. Quia excepturi aut consequatur. Nihil omnis eveniet quidem et. Maiores ut in rerum eos.\n \rUllam et asperiores quibusdam natus in blanditiis et veniam odio. Aperiam omnis molestiae quia. Temporibus explicabo in eum eligendi maiores rerum soluta. Et magnam sequi quae esse qui nesciunt provident id sit. Dolorem vel voluptatibus ipsa soluta.\n \rNeque aliquam eos porro molestiae sunt modi eos esse. Ab commodi optio. Temporibus natus non vel. Reiciendis est cum ab autem. Laudantium nemo eaque natus est dicta.",
    skills: [
      "%q0O.K@KG5",
      "%q0O.K@KG5",
      "%q0O.K@KG5",
      "%q0O.K@KG5",
      "%q0O.K@KG5",
    ],
    budget: 45,
    hoursPerWeek: 15,
    timePosted: 41,
    noProposals: 36,
    employerReview: 47,
  },
  {
    id: 43,
    title: "qui",
    location: "voluptatem",
    employerName: "nam",
    description: "Laboriosam rem repellat ducimus provident dolores.",
    skills: ["$R.QF@[4p]", "%q0O.K@KG5", "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 12,
    hoursPerWeek: 42,
    timePosted: 47,
    noProposals: 46,
    employerReview: 24,
  },
  {
    id: 9,
    title: "Quod ipsum fugit inventore voluptatum est quisquam id nobis.",
    location: "qui",
    employerName:
      "Ab ullam aut et itaque.\nExcepturi voluptatum alias in ut.\nOfficiis saepe repudiandae ab dicta.",
    description:
      "Accusamus dignissimos sed exercitationem beatae aut consequatur inventore. Libero ut ratione maiores ipsam omnis. Et debitis dolores voluptatem. Assumenda accusamus inventore explicabo velit molestias. Ab quisquam voluptatibus non dolorem tenetur eaque asperiores sit.\n \rExpedita sed et iure excepturi expedita quo. Delectus et nihil similique. Repudiandae dignissimos dolor aut eos recusandae nostrum. Error commodi est sequi quibusdam sit ratione mollitia corrupti.\n \rNam ullam perspiciatis laborum. Nihil accusantium quam error fugit. Quaerat et corporis ducimus deserunt consequatur. Reprehenderit aspernatur quas est officia consequatur laudantium soluta. Rem nihil possimus aut. Fugiat illo et officiis voluptatem dolor ex voluptatibus qui.",
    skills: ["@vw92tv`xa", "%q0O.K@KG5", "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 20,
    hoursPerWeek: 21,
    timePosted: 29,
    noProposals: 50,
    employerReview: 21,
  },
  {
    id: 27,
    title:
      "Magnam ut numquam aut exercitationem qui voluptate. Qui omnis omnis nihil est excepturi. Corporis repudiandae qui. Debitis quia laboriosam ullam et a inventore.",
    location: "Veniam sint aliquid ex. Tempore et repellat nihil dolore.",
    employerName:
      "Quibusdam enim est deleniti neque tempore eveniet autem est. Recusandae aliquam rem reprehenderit aspernatur voluptatem quasi.",
    description:
      "Voluptas placeat dolores ut aut aut sit labore qui enim. Laborum tempore magnam. Vel inventore ratione distinctio sunt itaque facilis nesciunt quia.",
    skills: ["wH(nfEN9]M", "%q0O.K@KG5", "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 45,
    hoursPerWeek: 11,
    timePosted: 47,
    noProposals: 20,
    employerReview: 4,
  },
  {
    id: 22,
    title: "accusantium rerum non",
    location:
      "Sequi consequuntur autem architecto natus quaerat. Optio delectus ad eos neque omnis. Voluptas eum quo aut adipisci in unde qui dolorem.",
    employerName:
      "Aut quos vero reprehenderit impedit vel ducimus iusto assumenda. Et odit distinctio ducimus est sunt sed rerum dolor voluptatum. Nesciunt praesentium veniam unde eveniet dolorem consequuntur omnis. Possimus asperiores itaque esse. Impedit possimus veritatis totam similique reiciendis dolore modi. Autem quibusdam et odio ut.",
    description:
      "Qui magni veniam voluptatem molestiae aut excepturi odit. Quod enim est maiores eius. Pariatur adipisci aliquam aperiam non quo quia et voluptas. Aperiam illum eveniet perspiciatis.",
    skills: ['<ZN.!"r$6O', "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 13,
    hoursPerWeek: 14,
    timePosted: 25,
    noProposals: 26,
    employerReview: 44,
  },
  {
    id: 29,
    title: "consequatur omnis nostrum",
    location:
      "Error in quis et ducimus. Omnis pariatur qui maxime. Porro omnis eos dignissimos. Maxime dignissimos aut qui doloremque ea placeat culpa velit.",
    employerName:
      "Eum aut et aperiam aliquam. Aut vitae sapiente et est. Ab modi ipsum modi deserunt minus exercitationem quae. Porro laboriosam natus voluptatem ut ipsam in modi expedita explicabo. Qui at consequatur dolores possimus eaque qui ut. Quam quos rerum culpa vel quae officia.\n \rNam ipsa voluptatem consequuntur fugit soluta quo exercitationem. Ipsam vel in iure et optio non fugit. Sint dignissimos quaerat debitis id qui suscipit facilis esse voluptatibus. Expedita cupiditate aperiam quia ducimus in temporibus.\n \rUt quia voluptas error asperiores assumenda omnis expedita. Quibusdam et dignissimos nobis maiores perspiciatis. Quo adipisci itaque qui eum architecto dicta magni. Dolorem corporis fugit.",
    description: "amet sequi earum",
    skills: ["%^.%83(Fl}", "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 47,
    hoursPerWeek: 25,
    timePosted: 28,
    noProposals: 9,
    employerReview: 29,
  },
  {
    id: 44,
    title: "quibusdam",
    location:
      "Et eligendi quod dolorem ipsam. Hic dolorum possimus sint. Doloribus temporibus debitis eaque sapiente quasi soluta. Et corporis voluptatem qui aut inventore sequi qui similique quia.",
    employerName: "voluptatem",
    description: "illum enim harum",
    skills: ["ik6K2)@BdI", , "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 17,
    hoursPerWeek: 14,
    timePosted: 31,
    noProposals: 22,
    employerReview: 31,
  },
  {
    id: 44,
    title:
      "Cumque et eos dicta sed eos aut.\nQuisquam qui eaque iure optio eum qui provident deleniti et.\nIllum sunt doloribus odio debitis adipisci.",
    location: "quod est recusandae",
    employerName:
      "Architecto corporis eum veniam error odio. Eaque totam dolores laborum impedit exercitationem quia. Voluptate eveniet voluptatum numquam eum facere.\n \rVel neque occaecati officiis. Eligendi magni quis consequuntur ex est. Ullam nihil deleniti ex ut consequatur ea atque ea et.\n \rExcepturi nihil corrupti et et sunt voluptates porro. Aut ducimus animi voluptas sequi veritatis et. Et inventore fuga minima autem molestias nulla vel. Odio debitis consequuntur voluptates excepturi optio. Accusantium atque dignissimos ratione nihil. Ea et voluptate exercitationem.",
    description:
      "Impedit aliquam saepe occaecati in tempora. Ut non praesentium est expedita tempore est veritatis non. Architecto recusandae in tempore tempore. Labore repudiandae cupiditate totam voluptatem illo quia.",
    skills: ['3r`Vpd!"P2'],
    budget: 35,
    hoursPerWeek: 12,
    timePosted: 39,
    noProposals: 50,
    employerReview: 24,
  },
  {
    id: 36,
    title: "cum consequatur reiciendis",
    location: "Ipsam aut occaecati voluptatem quidem asperiores est voluptate.",
    employerName: "sint earum molestiae",
    description: "Numquam unde dolores voluptatem tempore corrupti et eos.",
    skills: [">ZX&6I0@w:", "%q0O.K@KG5", "%q0O.K@KG5"],
    budget: 13,
    hoursPerWeek: 10,
    timePosted: 15,
    noProposals: 20,
    employerReview: 12,
  },
  {
    id: 34,
    title:
      "Et ut quisquam tenetur sit accusantium ut ducimus hic. Eaque atque ut error id repudiandae voluptate. Nesciunt in eos culpa voluptatum earum. Nihil dolorem sint. Ut fugit aspernatur aut sit ut rem.\n \rTempora quidem doloremque impedit velit ad. Voluptas veniam corporis. Et ratione officiis laudantium non sit iste alias molestiae. Voluptas ullam velit qui possimus ea. Quam voluptatibus voluptatem sequi et placeat sunt corporis. Eos vel voluptatem quis saepe molestias dolor est nobis ea.\n \rPerspiciatis et consequatur mollitia debitis adipisci laborum quo aut. Deleniti ut in molestiae. Est qui doloremque itaque voluptates nihil. Consequatur quo quis.",
    location:
      "Nostrum hic omnis distinctio ut illo cupiditate dolore. Consequatur consequuntur ex. Quo vero ea vero tenetur voluptatem dignissimos facere.",
    employerName:
      "Suscipit sed sit eligendi voluptas laudantium suscipit eius.\nOdit nihil necessitatibus voluptatibus non nobis delectus.\nTempore tenetur voluptatum vitae incidunt nobis et aliquid ab.",
    description:
      "Et dolorem veniam qui. Et vero necessitatibus quaerat at ducimus quasi aut. Debitis voluptatum enim illo quod. Suscipit at libero perspiciatis libero nam officiis. Ratione commodi voluptas et error facere cumque et quibusdam. Optio blanditiis tenetur dolorem odit nisi natus autem.",
    skills: ["%q0O.K@KG5", "zNB*FhY!HQ"],
    budget: 22,
    hoursPerWeek: 27,
    timePosted: 20,
    noProposals: 39,
    employerReview: 30,
  },
];
