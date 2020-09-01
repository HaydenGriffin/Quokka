interface ValidationError {
  field: string;
  message: string;
}

class RequiredFieldsValidator {
  private requiredFields: string[];

  constructor(requiredFields: string[]) {
    this.requiredFields = requiredFields;
  }

  validate(req: any): ValidationError[] {
    return this.validateRequiredFields(req);
  }

  private validateRequiredFields(req: any): ValidationError[] {
    const errors: ValidationError[] = [];

    this.requiredFields.forEach((field) => {
      if (!req[field]) {
        errors.push({ field, message: `field is required` });
      }
    });

    return errors;
  }
}

export { RequiredFieldsValidator, ValidationError };
