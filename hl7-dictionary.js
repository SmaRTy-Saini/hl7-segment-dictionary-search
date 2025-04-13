const hl7Dict = {
  "MSH": {
    "1": {
      "name": "Field Separator",
      "type": "ST",
      "description": "Separator used in the message"
    },
    "2": {
      "name": "Encoding Characters",
      "type": "ST",
      "description": "Characters used for encoding HL7 message"
    },
    "7": {
      "name": "Date/Time of Message",
      "type": "TS",
      "description": "Time the message was sent"
    }
  },
  "PID": {
    "3": {
      "name": "Patient Identifier List",
      "type": "CX",
      "description": "List of identifiers for the patient"
    },
    "5": {
      "name": "Patient Name",
      "type": "XPN",
      "description": "Full name of the patient"
    },
    "7": {
      "name": "Date/Time of Birth",
      "type": "TS",
      "description": "Patient\u2019s birth date and time"
    },
    "8": {
      "name": "Administrative Sex",
      "type": "IS",
      "description": "Patient\u2019s sex"
    }
  }
};