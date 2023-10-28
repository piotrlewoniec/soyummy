This folder should contain one folder for each page in your application. Inside
of those page specific folders should be a single root file that is your page
(generally index.js) alongside all the files that are only applicable to that
page. For example in the above image we have a Login page which contains the
root file index.js, a component called LoginForm, and a custom hook called
useLogin. This component and hook are only ever used in the Login page so they
are stored with this page instead of being stored in the global hooks or
components folders.

This separation of page specific code from your more general global code is the
biggest benefit of this system over the simple folder structure. It is easier to
see what your application is doing when all the relevant code is collocated in a
single folder.

The other major change with this new structure is the pages folder. This folder
now only contains one file per page and the reason for this is that all the
logic for the features on the pages are in the features folder. This means that
the files in the pages folder are actually quite simple since they just glue
together a few feature components and some general components.
