# auslance

An Upwork competitor built for Australian engineers, designers, sales and marketing people.

## Features

- Create and post jobs
- Submit proposals to jobs
- Postgres Row Level Security
- Job Filtering
- Saving jobs
- Create tailor Freelancer and Employer profiles
- Support for freelancer and employer accounts through the one email
- Magic link authentication
- SSR for protected routes

### Tech stack

- Typescript
- Next.js
- TailwindCSS
- Supabase for their Postgres Database and Auth services
- Stripe Connect (yet to be implemented) for payments

## Roadmap

- ~~Add user authentication~~

- Add basic CRUD functionality to interface with Supabase (75% complete)

- Integrate Stripe Connect into proposal and hiring system

- Build out frontend similar to AngelList and Upwork

- Add job recommendation algorithm

- Add advanced searching

- Add support for agencies

## Technical considerations

**What's too much abstraction? Is there any point in using container components if I'm already using custom hooks?**

At the moment, I'm fine with using container components with custom hooks inside of them.

Without containers, there'd be some clutter from a useDatabase() hook and a useFreelancer() hook for example.

They're also nice for creating onSubmit handler functions for forms, which can get messy if placed with a bunch of other presentational component logic.

**Is a generic Input component too reusable?**

It's a pattern I've used on numerous projects that works well, for example, ObjectTextInput which takes in the following props (amongst others):

- value (Object),
- setValue (Dispatch<SetStateAction<Object>>)
- field (string)
-

This is useful anytime you want to have an input for a piece of state that's an object such as a freelancer.

The problem comes when you chuck a label in there too, which has it's own set of props and then the component will end up taking 12 lines up in a file.

You'll probably have 5 of these on the average form, which really adds up. I'm still running with these though but am on the lookout for better alternatives.

**Is it fine to use snake_case as well as camelCase?**

I ran into a real dilemma here. Everything that I create always uses Camel Case notation, it's much easier to read than snake_case in my opinion and is just how I do things.

The problem here though, came with Postgres. Postgres doesn't allow for capitlisations and everything should use Snake Case notaion.

That's all fine though, the problem here is that I want type safety as well as minimising semi-duplicate code and unnessecary lines.

This came with my form handlers, where when creating a job for example, with 10 or so fields, I wanted to be able to simply use some object destructuring to be able to populate all of the fields that my database expects for a row in the jobs table.

This wasn't an isolated issue to just the jobs table either though, it's present on everything that saves to the database. I also wanted the benefit of destructuring so that I could simply destructure from a database read without having to reassign every column to a new object property.

Some may call this lazy but I call it efficient 😂. I've opted to using snake_cake for anything that gets sent to and from the database and camelCase for anything else.

This saves me having to create two types for every single table, as well as reassigning the column values to a new set of object properties every time I want to read and write to the database.

Now, I could change my stance on this in the future but I think it works fine, I value output over "best practices" when the quality of the work isn't affected at all.

I would even go as far to argue that it's beneficial because any time a value is being used with snake_case, it'll be a reminder that it's going to and from the database and that the value should be validated before getting saved.

I can imagine there'll be some objections here but I'm always up for a good dicussion!

## Creator

Created by Benjamin Bialy, an Australian Full Stack Web Developer.

Skilled in Next.js, Typescript, Supabase, Firebase, PostgreSQL, Stripe integrations and much, much more!

Available for hire [here](https://www.upwork.com/freelancers/~010e8c3f713dce417d) on Upwork (yes, ironic!) or on [email](mailto:benjamincbialy@gmail.com) for any business (or friendly) enquiries.
