import React from "react";
import Form, {
   Input,
   Select,
   FormButton,
   CheckboxList,
   GalleryUpload,
   Radio,
   Row,
} from "react-form-component";

function Inputs() {
   return (
      <Form fields={["name", "email", "type"]} mandatory={["name"]}>
         <Row>
            <Input label="Name" name="name" />
            <Input label="E-mail" name="email" type="email" />
         </Row>
         <Select
            name="type"
            label="Type of a user"
            options={["Viewer", "Moderator", "Admin"]}
         />
         <CheckboxList
            className=""
            help="Help text"
            initialValue={[]}
            label="Multiple checkboxes:"
            name="checkboxList"
            options={[
               "Option one",
               {
                  label: "Option two",
                  value: "Option two",
               },
            ]}
         />
         <Radio
            className=""
            help="Help text"
            label="Radio"
            name="example"
            options={[
               "Sparkling water",
               "Cola",
               {
                  label: "Lemonade",
                  value: "lemonade",
               },
               {
                  label: "Beer",
                  value: "beer",
               },
               {
                  label: "Kompot",
                  value: "kompot",
               },
            ]}
         />
         {/* <GalleryUpload
            className=""
            columns="6"
            help="Help text"
            label="Gallery upload"
            name="example"
         /> */}
         <FormButton onClick={(fields) => console.log(fields)}>Save</FormButton>
      </Form>
   );
}

export default Inputs;
