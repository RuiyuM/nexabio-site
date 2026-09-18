/** Create a separate unpublished draft; never overwrite the existing form.
 * Paste into script.google.com and run createNexabioDraft.
 * Google Forms scope only. Creates no Sheet and sends no email.
 * Generated from questionnaire.json; run python3 forms/build_sources.py after edits.
 */
const QUESTIONNAIRE = {
  "version": "1.0.0",
  "title": "NEXABio | Student Interest Form",
  "description": "NEXABio at The University of Texas at Dallas connects artificial intelligence and biomaterials research. Tell us about your academic background, expected graduation, research interests, and learning goals. This takes about 3-5 minutes. Program dates and participation details are still being finalized. This is an expression of interest, not confirmation of enrollment. The project team will use your responses for program planning and follow-up. Please do not include sensitive personal or financial information.",
  "confirmationMessage": "Thank you for your interest in NEXABio. Your response has been recorded. This is an expression of interest, not confirmation of enrollment. Program details will be shared when finalized.",
  "questions": [
    {
      "id": "full_name",
      "title": "Full name",
      "type": "short_answer",
      "required": true
    },
    {
      "id": "email",
      "title": "Email address",
      "type": "short_answer",
      "required": true,
      "validation": "email"
    },
    {
      "id": "institution",
      "title": "Institution or university",
      "type": "multiple_choice",
      "required": true,
      "allowOther": true,
      "options": [
        {
          "code": "ut_dallas",
          "label": "The University of Texas at Dallas"
        },
        {
          "code": "unt_dallas",
          "label": "University of North Texas at Dallas"
        },
        {
          "code": "dallas_college",
          "label": "Dallas College"
        },
        {
          "code": "paul_quinn",
          "label": "Paul Quinn College"
        }
      ]
    },
    {
      "id": "major",
      "title": "Major or field of study",
      "type": "multiple_choice",
      "required": true,
      "allowOther": true,
      "options": [
        {
          "code": "computer_science",
          "label": "Computer Science"
        },
        {
          "code": "bioengineering",
          "label": "Bioengineering / Biomedical Engineering"
        },
        {
          "code": "materials_science",
          "label": "Materials Science / Materials Engineering"
        },
        {
          "code": "chemistry",
          "label": "Chemistry / Polymer Science"
        },
        {
          "code": "chemical_engineering",
          "label": "Chemical Engineering"
        },
        {
          "code": "data_science",
          "label": "Data Science / Statistics"
        }
      ]
    },
    {
      "id": "degree_level",
      "title": "Current degree level",
      "type": "multiple_choice",
      "required": true,
      "options": [
        {
          "code": "undergraduate",
          "label": "Undergraduate"
        },
        {
          "code": "masters",
          "label": "Master's student"
        },
        {
          "code": "doctoral",
          "label": "Doctoral student"
        },
        {
          "code": "other",
          "label": "Other"
        }
      ]
    },
    {
      "id": "graduation_year",
      "title": "Expected graduation year",
      "type": "dropdown",
      "required": true,
      "options": [
        {
          "code": "2026",
          "label": "2026"
        },
        {
          "code": "2027",
          "label": "2027"
        },
        {
          "code": "2028",
          "label": "2028"
        },
        {
          "code": "2029",
          "label": "2029"
        },
        {
          "code": "2030",
          "label": "2030"
        },
        {
          "code": "2031",
          "label": "2031"
        },
        {
          "code": "2032",
          "label": "2032"
        },
        {
          "code": "2033",
          "label": "2033"
        },
        {
          "code": "2034_plus",
          "label": "2034 or later"
        },
        {
          "code": "unsure",
          "label": "Not sure yet"
        }
      ]
    },
    {
      "id": "graduation_term",
      "title": "Expected graduation term",
      "type": "multiple_choice",
      "required": true,
      "options": [
        {
          "code": "spring",
          "label": "Spring"
        },
        {
          "code": "summer",
          "label": "Summer"
        },
        {
          "code": "fall",
          "label": "Fall"
        },
        {
          "code": "winter",
          "label": "Winter"
        },
        {
          "code": "unsure",
          "label": "Not sure yet"
        }
      ]
    },
    {
      "id": "research_interests",
      "title": "Which research areas interest you?",
      "type": "checkboxes",
      "required": true,
      "options": [
        {
          "code": "ai_biomaterials",
          "label": "AI / machine learning for biomaterials"
        },
        {
          "code": "drug_delivery",
          "label": "Drug and gene delivery"
        },
        {
          "code": "polymer_design",
          "label": "Polymer and materials design"
        },
        {
          "code": "tissue_engineering",
          "label": "Tissue engineering / regenerative medicine"
        },
        {
          "code": "scientific_computing",
          "label": "Scientific computing / high-performance computing"
        },
        {
          "code": "exploring",
          "label": "Still exploring my interests"
        }
      ]
    },
    {
      "id": "research_experience",
      "title": "Prior research experience",
      "type": "multiple_choice",
      "required": true,
      "options": [
        {
          "code": "none",
          "label": "No prior research experience"
        },
        {
          "code": "coursework",
          "label": "Course-based research only"
        },
        {
          "code": "less_than_1_year",
          "label": "Research outside coursework - less than 1 year"
        },
        {
          "code": "at_least_1_year",
          "label": "Research outside coursework - 1 year or more"
        }
      ]
    },
    {
      "id": "expected_gains",
      "title": "What do you hope to gain from NEXABio?",
      "type": "checkboxes",
      "required": true,
      "options": [
        {
          "code": "foundations",
          "label": "Learn AI and biomaterials fundamentals"
        },
        {
          "code": "computing_skills",
          "label": "Build programming and data-analysis skills"
        },
        {
          "code": "project_experience",
          "label": "Gain hands-on research project experience"
        },
        {
          "code": "research_direction",
          "label": "Identify a research direction"
        },
        {
          "code": "graduate_study",
          "label": "Prepare for graduate study"
        },
        {
          "code": "research_careers",
          "label": "Explore research-related careers"
        }
      ]
    },
    {
      "id": "research_outlook",
      "title": "Your research outlook",
      "type": "paragraph",
      "required": false,
      "helpText": "In 2-3 sentences, describe a research question you hope to explore or how this training could support your future plans."
    },
    {
      "id": "email_updates",
      "title": "Would you like email updates about NEXABio?",
      "type": "multiple_choice",
      "required": true,
      "options": [
        {
          "code": "yes",
          "label": "Yes"
        },
        {
          "code": "no",
          "label": "No"
        }
      ]
    }
  ]
};
function createNexabioDraft() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty('NEXABIO_DRAFT_FORM_ID');
  if (existingId) {
    const existing = FormApp.openById(existingId);
    console.log('Existing draft: ' + existing.getEditUrl());
    return existing.getEditUrl();
  }
  const form = FormApp.create(QUESTIONNAIRE.title + ' - draft copy', false);
  props.setProperty('NEXABIO_DRAFT_FORM_ID', form.getId());
  form.setDescription(QUESTIONNAIRE.description).setCollectEmail(false)
    .setLimitOneResponsePerUser(false).setPublishingSummary(false)
    .setShuffleQuestions(false).setConfirmationMessage(QUESTIONNAIRE.confirmationMessage);
  for (const q of QUESTIONNAIRE.questions) {
    let item;
    const choices = (q.options || []).map(o => o.label);
    switch (q.type) {
      case 'short_answer':
        item = form.addTextItem();
        if (q.validation === 'email') item.setValidation(FormApp.createTextValidation().requireTextIsEmail().setHelpText('Please enter a valid email address.').build());
        break;
      case 'paragraph': item = form.addParagraphTextItem(); break;
      case 'multiple_choice': item = form.addMultipleChoiceItem().setChoiceValues(choices); if (q.allowOther) item.showOtherOption(true); break;
      case 'checkboxes': item = form.addCheckboxItem().setChoiceValues(choices); break;
      case 'dropdown': item = form.addListItem().setChoiceValues(choices); break;
      default: throw new Error('Unsupported type: ' + q.type);
    }
    item.setTitle(q.title).setRequired(q.required);
    if (q.helpText) item.setHelpText(q.helpText);
  }
  console.log('Draft edit URL: ' + form.getEditUrl());
  console.log('Responder URL (unpublished): ' + form.getPublishedUrl());
  return form.getEditUrl();
}
