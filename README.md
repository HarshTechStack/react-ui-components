````markdown
# React Component Development Assignment

## Project Overview
This project contains two reusable React UI components built using **React**, **TypeScript**, **TailwindCSS**, and **Storybook**. The focus is on creating scalable, accessible, and well-documented components.

**Components included:**
1. **InputField** – A flexible input component with validation and interactive states.  
2. **DataTable** – A dynamic table component with sorting, row selection, loading, and empty states.

---

## Tech Stack
- React 18  
- TypeScript  
- TailwindCSS for styling  
- Storybook 9 for component documentation  
- Node.js 20 (development environment)

---

## Component 1: InputField

**Description:**  
A highly customizable input component that supports multiple states and variants.

**Features:**
- Text input with label, placeholder, and helper text  
- Validation states with error messages  
- Disabled and loading states  
- Visual variants: `filled`, `outlined`, `ghost`  
- Sizes: `sm`, `md`, `lg`  
- Optional: clear button and password toggle  
- Light and dark theme support

**Props:**
```ts
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  clearable?: boolean;
  type?: 'text' | 'password' | 'email';
}
````

**Storybook Preview:**
(Replace with your Storybook deployment link)

---

## Component 2: DataTable

**Description:**
A reusable and type-safe table component for displaying tabular data with advanced features.

**Features:**

* Displays rows and columns dynamically based on props
* Column sorting (ascending/descending)
* Row selection (single/multiple)
* Loading state
* Empty state
* Fully responsive
* Accessible (ARIA attributes included)

**Props:**

```ts
interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}
```

**Storybook Preview:**
(Replace with your Storybook deployment link)

---

## Setup Instructions

**Clone the repository:**

```bash
git clone <your-repo-url>
cd react-ui-components
```

**Install dependencies:**

```bash
npm install
```

**Run the app:**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

**Run Storybook:**

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view all component stories.

---

## Approach & Implementation

* **Reusable Components:** Both `InputField` and `DataTable` use TypeScript generics and props for maximum flexibility.
* **Styling:** TailwindCSS is used for clean, modern, and responsive UI.
* **Accessibility:** ARIA labels and roles are applied for screen readers.
* **Storybook:** Each component has its own story with multiple examples covering default, error, loading, disabled, and interactive states.
* **Testing:** Basic type safety and prop validation with TypeScript; interactive testing via Storybook.

---

## Deployment

Storybook is deployed using Chromatic/Vercel for live component preview:
Storybook Preview Link (replace with actual URL)

---

## Screenshots / GIFs (Optional)

Add your interactive component screenshots or GIFs here to showcase features.

---

## Author

**Vivek Harsh**
Email: [vivekharsh.work@gmail.com](mailto:vivekharsh.work@gmail.com)
GitHub: [https://github.com/HarshTechStack](https://github.com/HarshTechStack)

---

## License

This project is for educational purposes and assignment submission only.

```
