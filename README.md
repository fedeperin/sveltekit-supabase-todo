# SvelteKit Supabase To Do App
A To Do App with an auth system built with SvelteKit and Supabase. <br>
Demo of the project at [todo-sveltekit.netlify.app](https://todo-sveltekit.netlify.app).

# Clone the project
First, git clone this project. <br>
Then, run `npm install` to install the required dependencies. <br>
Once the dependencies are installed, at the main route of the project, create a new file called `.env`. <br>
The `.env` file needs to contain the following code: 

```.env
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_URL=
```

Next to `VITE_SUPABASE_ANON_KEY=` you need to add a Supabase Anon key, you can get yourse by going to the [Supabase App page](https://app.supabase.io) and creating a new project.<br>
Next to `VITE_SUPABASE_URL=` you need to add a Supabase URL, you will also get it when you create the project.<br>

At the Supabase Auth config of your project, disable the option named "Enable Email Confirmations". <br>
Then, at the tables section create a new table called users and add the following colums: <br>

- username: It is a text area and it does not have a default value
- email: It is a text area and it does not have a default value
- todos: It is a json area and the default value is []

That's all! <br>
You can run `npm run dev` and use it as a SvelteKit app.