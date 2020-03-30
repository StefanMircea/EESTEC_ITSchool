<template>
  <div id="container">
    <h1 id="title">Apply to be a templar!</h1>
    <div id="form">
      <div class="formItem" v-for="(label,index) of formLabels" v-bind:key="index">
        <p class="formLabel">{{ label }}</p>
        <input type="text" class="formInput" v-if="index != formLabels.length - 1" v-bind:placeholder="formPlaceHolder[index]" v-model="textInput[index]" v-bind:class="{errorBorderColor: notFilled[index]}"/>
        <textarea class="formInput" id="deusInput" v-if="index == formLabels.length - 1" v-bind:placeholder="formPlaceHolder[index]" v-model="textInput[index]"></textarea>
      </div>
      <h2 id="checkboxLabel">I am not a robot!</h2>
      <input type="checkbox" id="checkbox" class="formItem" v-model="checked" />
      <input type="submit" value="Deus Vult!" id="submitButton" class="formItem" v-on:click="checkSubmit()"/>
      <p id="errorMessage" v-bind:style="{visibility: errorVisibility}">{{ errorText[errorNumber] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabels: [
        "First Name:",
        "Latin First Name:",
        "Last Name:",
        "Creed:",
        "Deus Vult!"
      ],
      formPlaceHolder: [
        "Your first name",
        "Your latin first name",
        "Your last name",
        "Your Creed",
        "Deus Vult!"
      ],
      errorText: [
        "Please verify that you are not a robot!",
        "Please fill in all the fields!"
      ],
      textInput: ["", "", "", "", ""],
      checked: false,
      errorNumber: 0,
      errorVisibility: "hidden",
      errorShow: false,
      notFilled: [0,0,0,0]
    };
  },
  methods: {
    checkSubmit() {
        this.wasSubmited = true;
        this.textInput.forEach((element,index) => {
            if(index != this.textInput.length - 1) { 
                if (element == "") {
                    this.errorNumber = 1;
                    this.errorVisibility = "visible";
                    this.notFilled[index] = 1;
                } else {
                    this.notFilled[index] = 0;
                }
            }    
        });
        if (this.checked == false && this.notFilled.join("") == "0000") {
            this.errorNumber = 0;
            this.errorVisibility = "visible";
        }

        if(this.checked == true && this.notFilled.join("") == "0000"){
            this.errorVisibility = "hidden";
            console.log(this.textInput);
            alert(this.textInput);
        }    
    }
  }
};
</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

#title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
}

#form {
  margin: auto;
  width: 25%;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
  border-radius: 2%;
  background-color: #a9a9a9;
  border-style: outset;
  border-color: black;
  border-width: 1px;
}

.formItem {
  width: 90%;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
}

.formLabel {
  text-align: left;
  font-size: 30px;
  margin-bottom: 5px;
}

.formInput {
  width: 97%;
  border-radius: 7px;
  font-size: 20px;
}

.formInput:focus {
  border-color: black;
  border-style: solid;
}

#deusInput {
  resize: none;
  border-radius: 0px;
}

#submitButton {
  width: 20%;
  min-width: 80px;
  height: 30px;
  margin-right: 40%;
  margin-left: 40%;
  border-radius: 5px;
  background-color: white;
  transition: all 0.2s;
}

#submitButton:hover {
  background-color: #808080;
}

#checkboxLabel {
  font-size: 25px;
}

#checkbox {
  width: 25px;
  height: 25px;
  margin-right: 40%;
  margin-left: 40%;
}

#checkbox:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

#errorMessage {
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
}

.errorBorderColor {
    border-color: red;
}
</style>