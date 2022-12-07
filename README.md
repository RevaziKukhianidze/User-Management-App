# UserApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## აპლიკაციის აღწერა და პირობები
აპლიკაციის საწყილი გვერდი გამოიყურება შემდეგნაირად: 

![image](https://user-images.githubusercontent.com/56683170/206144740-8670e35e-47fc-4a20-82e4-85a63ed60aaa.png)

აპლიკაცია იყენებს NodeJs back-end სერვერს, რომელიც დაწერილია Express-ზე
მონაცემთა ბაზა: MongoDB

https://github.com/RevaziKukhianidze/User-management-App-backend

##პირობები

დავალება N1: User Management Application

შექმენით აპლიკაცია, რომლის საშუალებითაც შევავსებთ მომხმარებლების ბაზას. დაგვჭირდება ოთხი გვერდი:

1. კატეგორიების გვერდი - მონაცემების დამატება/ცვლილება ხდება popup-ის გამოყენებით:
→ ფილტრის ნაწილი
▪ დასახელება (contains)
→ ცხრილის ნაწილი (Pagination-ით)
▪ დასახელება

2. მომხმარებლის სტატუსების გვერდი - მონაცემების დამატება/ცვლილება ხდება popup-ის გამოყენებით:
→ ფილტრის ნაწილი
▪ დასახელება (contains)
→ ცხრილის ნაწილი (Pagination-ით)
▪ დასახელება

3. მომხმარებლების სიის გვერდი - მონაცემების დამატება/ცვლილება ხდება ცალკე გვერდის გამოყენებით (არა - popup-ის გამოყენებით):

→ ფილტრის ნაწილი
▪ ელ.ფოსტა (contains)
▪ პირადი ნომერი (contains)
▪ სახელი (contains)
▪ გვარი (contains)
▪ კატეგორია (contains)
▪ სტატუსი (contains)

→ ცხრილის ნაწილი
▪ ელ. ფოსტა
▪ პირადი ნომერი
▪ სახელი
▪ გვარი
▪ დაბადების თარიღი 
▪ კატეგორია
▪ სტატუსი

4. მომხმარებლის დეტალების გვერდი, საიდანაც შევძლებთ ახალი მომხარებლის დამატებას ან არსებულის ცვლილებას და შენახვას.
→ ველები:
▪ ელ. ფოსტა (text input)
▪ პირადი ნომერი (text input)
▪ სახელი (text input)
▪ გვარი (text input)
▪ დაბადების თარიღი (datetime)
▪ კატეგორია (dropdown)
▪ სტატუსი (dropdown)

აპლიკაციის შექმნის წესები:
− აპლიკაცია უნდა შეიქმნას Angular 11+ Framework-ზე
− უნდა გამოიყენოთ Angular Modules
− უნდა გამოიყენოთ Angular Routing
− უნდა გამოიყენოთ Angular Forms (Template Driven ან Reactive, თქვენი გემოვნებით)
− ყურადღებას მივაქცევთ ვიზუალურ მხარესაც: შეგიძლიათ შექმნათ თქვენი კომპონენტები (ჩაითვლება უპირატესობად - Inputs, Button etc.) ან გამოიყენოთ ანგულარის UI Library-ებიდან რომელიმე, მაგ: Primeng, Angular Material, NGX Bootstrap ან ნებისმიერი თქვენი გემოვნებით
− მონაცემები უნდა შეინახოთ სერვერზე, შესაბამისად მოგიწევთ Angular HttpClient-ის გამოყენებით REST API-სთან მუშაობა. შეარჩიეთ თქვენი გემოვნებით: რომელიმე Mock Server, JSON Server (npm), NodeJs Server (ჩაითვლება უპირატესობად)

დავალება N2: User Management API
NodeJs Server-ის ალტერნატივის შემთხვევაში, შექმენით მეორე აპლიკაციაც NodeJs პლატფორმაზე.
Hint: თუ, აირჩევთ რომელიმე Framework-ს, უფრო გაგიადვილდებათ დეველოპმენტი, მაგ: Node Express, NestJs (ძალიან გავს ანგულარს სტრუქტურით) ან ნებისმიერი. სერვერის კონფოგურაცია შეგიძლიათ დატოვოთ მინიმალური.

API Endpoint-ები:
− კატეგორიის დამატება
− კატეგორიის ცვლილება
− კატეგორიის წაშლა
− კატეგორიების სიის წამოღება 
− სტატუსის დამატება
− სტატუსის ცვლილება
− სტატუსის წაშლა
− სტატუსების სიის წამოღება 
− მომხმარებლის დამატება
− მომხმარებლის ცვლილება
− მომხმარებლის წაშლა
− მომხმარებლების სიის წამოღება 
− კონკრეტული მომხმარებლების მონაცემების წამოღება



