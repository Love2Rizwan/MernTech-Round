# MernTech-Round
Tech Round

Todquest MernTech Round

Q.1. Read the local directory and list all file names in it using JS.

Q.2. Given these 2 schemas, loop thru each student and show its time entries.

var WorksnapsTimeEntry = BaseSchema.extend({ student: {
type: Schema.ObjectId, ref: 'Student'
},
Time entries: { type: Object
}
});
var StudentSchema = BaseSchema.extend({ firstName: {
type: String, trim: true, default: ''
// validate: [validateLocalStrategyProperty, 'Please fill in your first name']
},
lastName: { type: String, trim: true, default: ''
// validate: [validateLocalStrategyProperty, 'Please fill in your last name']
},
displayName: { type: String, trim: true
},
municipality: { type: String
}
});


Q.3. Design a web page using react/html/css/js: https://file.mockplus.com/image/2019/05/602ba7d7-2716-485a-bd30-a36a3402fc94.png.
Q.4. Write a program in JS to check whether a number is prime or not?
Q.5. Write a program to display this pattern ?
