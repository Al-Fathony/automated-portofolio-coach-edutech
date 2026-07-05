<template>

<div
class="modal fade"
id="progressModal"
tabindex="-1"
>

<div class="modal-dialog modal-dialog-centered">

<div class="modal-content modern-modal">

<div class="modal-header border-0">

<h5 class="fw-bold">

{{ form.id ? "Edit Learning Progress" : "Tambah Learning Progress" }}

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

Course Name

</label>

<input
v-model="form.courseName"
class="form-control modern-input"
placeholder="Contoh : Belajar Vue.js"
>

</div>

<div class="mb-3">

<label class="form-label">

Category

</label>

<select
v-model="form.category"
class="form-select modern-input"
>

<option>Frontend</option>
<option>Backend</option>
<option>Database</option>

</select>

</div>

<div class="mb-3">

<label class="form-label">

Progress

</label>

<input
type="number"
v-model="form.Progress"
class="form-control modern-input"
min="0"
max="100"
>

</div>

<div class="mb-4">

<label class="form-label">

Status

</label>

<select
v-model="form.status"
class="form-select modern-input"
>

<option>Completed</option>
<option>In Progress</option>

</select>

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

import { reactive, watch } from "vue";

const props = defineProps({

data:Object

});

const emit = defineEmits([

"save"

]);

const form = reactive({

id:null,

courseName:"",

category:"Frontend",

progress:0,

status:"Completed"

});

watch(

()=>props.data,

(value)=>{

if(value){

Object.assign(form,value);

}else{

form.id=null;
form.courseName="";
form.category="Frontend";
form.progress=0;
form.status="Completed";

}

},

{ immediate:true }

);

const save=()=>{

if(form.courseName===""){

alert("Course Name wajib diisi");

return;

}

if(form.progress<0 || form.progress>100){

alert("Progress harus 0-100");

return;

}

emit("save",{...form});

};

</script>

<style scoped>

.modern-modal{

background:#1f2937;

color:white;

border-radius:18px;

border:none;

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

</style>