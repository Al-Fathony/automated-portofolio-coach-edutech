<template>

<div
class="modal fade"
id="projectModal"
tabindex="-1"
>

<div class="modal-dialog modal-lg modal-dialog-centered">

<div class="modal-content modern-modal">

<div class="modal-header border-0">

<h5 class="fw-bold">

{{ form.id ? "Edit Project" : "Tambah Project" }}

</h5>

<button
type="button"
class="btn-close btn-close-white"
data-bs-dismiss="modal"
></button>

</div>

<div class="modal-body">

<div class="mb-3">

<label class="form-label">

Project Name

</label>

<input
v-model="form.projectName"
class="form-control modern-input"
placeholder="Contoh : Portfolio Website"
>

</div>

<div class="mb-3">

<label class="form-label">

Project URL

</label>

<input
v-model="form.projectUrl"
class="form-control modern-input"
placeholder="https://github.com/..."
>

</div>

<div class="mb-3">

<label class="form-label">

Description

</label>

<textarea
rows="4"
v-model="form.description"
class="form-control modern-input"
placeholder="Jelaskan project..."
></textarea>

</div>

<div class="mb-4">

<label class="form-label">

Score

</label>

<input
type="number"
min="0"
max="100"
v-model="form.score"
class="form-control modern-input"
>

</div>

</div>

<div class="modal-footer border-0">

<button
class="btn btn-outline-light"
data-bs-dismiss="modal"
>

Cancel

</button>

<button
class="btn btn-light text-dark fw-bold"
@click="save"
>

<i class="bi bi-check-circle me-2"></i>

Save

</button>

</div>

</div>

</div>

</div>

</template>

<script setup>

import {

reactive,

watch

}

from "vue";

const props = defineProps({

data:Object

});

const emit = defineEmits([

"save"

]);

const form = reactive({

id:null,

projectName:"",

projectUrl:"",

description:"",

score:0

});

watch(

()=>props.data,

(value)=>{

if(value){

Object.assign(form,value);

}

else{

form.id=null;
form.projectName="";
form.projectUrl="";
form.description="";
form.score=0;

}

},

{

immediate:true

}

);

const save=()=>{

if(form.projectName===""){

alert("Nama Project wajib diisi");

return;

}

if(form.score<0 || form.score>100){

alert("Score harus 0 - 100");

return;

}

emit(

"save",

{

...form

}

);

};

</script>

<style scoped>

.modern-modal{

background:#1f2937;

color:white;

border:none;

border-radius:18px;

}

.form-label{

font-weight:600;

color:#d1d5db;

}

.modern-input{

background:#374151;

border:none;

color:white;

}

.modern-input:focus{

background:#4b5563;

color:white;

box-shadow:none;

}

.modern-input::placeholder{

color:#9ca3af;

}

textarea{

resize:none;

}

</style>