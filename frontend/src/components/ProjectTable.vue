<template>
  <div class="table-card">

    <table class="table align-middle mb-0">

      <thead>

        <tr>

          <th>No</th>
          <th>Project</th>
          <th>Description</th>
          <th width="220">Score</th>
          <th width="120">URL</th>
          <th width="170">Action</th>

        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(item,index) in projects"
          :key="item.id"
        >

          <td>{{ index + 1 }}</td>

          <td>

            <strong>

              {{ item.projectName }}

            </strong>

          </td>

          <td>

            {{ item.description }}

          </td>

          <td>

            <div class="progress modern-progress">

              <div
                class="progress-bar"
                :style="{
                  width:item.score+'%'
                }"
              >

                {{ item.score }}%

              </div>

            </div>

          </td>

          <td>

            <a
              v-if="item.projectUrl"
              :href="item.projectUrl"
              target="_blank"
              class="btn btn-sm btn-outline-dark"
            >

              <i class="bi bi-box-arrow-up-right"></i>

            </a>

            <span
              v-else
              class="text-secondary"
            >

              -

            </span>

          </td>

          <td>

            <button
              class="btn btn-sm btn-dark me-2"
              @click="$emit('edit',item)"
            >

              <i class="bi bi-pencil-square"></i>

            </button>

            <button
              class="btn btn-sm btn-outline-danger"
              @click="$emit('delete',item.id)"
            >

              <i class="bi bi-trash"></i>

            </button>

          </td>

        </tr>

        <tr
          v-if="projects.length===0"
        >

          <td
            colspan="6"
            class="text-center py-5 text-secondary"
          >

            <i
              class="bi bi-folder2-open"
              style="font-size:50px"
            ></i>

            <br><br>

            Belum ada Project.

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</template>

<script setup>

defineProps({

  projects:{

    type:Array,

    default:()=>[]

  }

})

defineEmits([

  "edit",

  "delete"

])

</script>

<style scoped>

.table-card{

background:white;

border-radius:18px;

padding:20px;

box-shadow:0 8px 25px rgba(0,0,0,.08);

}

thead{

background:#111827;

color:white;

}

thead th{

padding:16px;

border:none;

}

tbody td{

padding:18px 16px;

vertical-align:middle;

}

tbody tr{

transition:.25s;

}

tbody tr:hover{

background:#f9fafb;

}

.modern-progress{

height:10px;

background:#e5e7eb;

border-radius:20px;

}

.progress-bar{

background:#111827;

font-size:10px;

}

.btn{

border-radius:8px;

}

</style>