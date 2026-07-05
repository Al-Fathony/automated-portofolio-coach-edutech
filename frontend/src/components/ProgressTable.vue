<template>
  <div class="table-card">

    <table class="table align-middle mb-0">

      <thead>

        <tr>

          <th>No</th>
          <th>Course</th>
          <th>Category</th>
          <th width="220">Progress</th>
          <th>Status</th>
          <th width="180">Action</th>

        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(item,index) in progress"
          :key="item.id"
        >

          <td>{{ index + 1 }}</td>

          <td>

            <strong>

              {{ item.courseName }}

            </strong>

          </td>

          <td>

            {{ item.category }}

          </td>

          <td>

            <div class="progress modern-progress">

              <div
                class="progress-bar"

                :style="{

                  width:item.score+'%'

                }"

              >

                {{ item.progress }}%

              </div>

            </div>

          </td>

          <td>

            <span
              class="status"
              :class="{

                complete:item.status==='Completed',

                progress:item.status==='In Progress'

              }"
            >

              {{ item.status }}

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

        <tr v-if="progress.length===0">

          <td
            colspan="6"
            class="text-center py-5 text-secondary"
          >

            <i
              class="bi bi-journal-x"
              style="font-size:50px"
            ></i>

            <br><br>

            Belum ada Learning Progress.

          </td>

        </tr>

      </tbody>

    </table>

  </div>
</template>

<script setup>

defineProps({

  progress:Array

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

table{

margin:0;

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

.status{

padding:8px 15px;

border-radius:20px;

font-size:13px;

font-weight:bold;

}

.complete{

background:#d1fae5;

color:#065f46;

}

.progress{

background:#fef3c7;

color:#92400e;

}

.btn{

border-radius:8px;

}

</style>