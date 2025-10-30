{
  "pageId": "employeeOnboarding",
  "title": "Employee Onboarding",
  "layout": "2-column",
  "forms": [
    {
      "formId": "personalDetails",
      "title": "Personal Details",
      "fields": [
        {
          "type": "text",
          "label": "Full Name",
          "name": "fullName",
          "placeholder": "Enter full name",
          "validators": { "required": true, "minLength": 3 }
        },
        {
          "type": "email",
          "label": "Email",
          "name": "email",
          "validators": { "required": true, "email": true }
        },
        {
          "type": "select",
          "label": "Department",
          "name": "department",
          "options": ["HR", "Finance", "IT", "Marketing"],
          "validators": { "required": true }
        }
      ]
    }
  ]
}
