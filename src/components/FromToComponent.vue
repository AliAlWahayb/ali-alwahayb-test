<template>
    <div v-if="!isRTL" class="d-flex mb-3 w-100">
            <div class="d-flex">
                <label class="pe-3 mt-2 text-white">{{ $t('selectDate') }}</label>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75 " :placeholder="$t('from')" aria-label="From date"
                        aria-describedby="button-addon2" v-model="from_date" disabled>
                    <input type="date" class="form-control  " value="From" v-model="from_date">
                </div>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75 " :placeholder="$t('to')" aria-label="To date"
                        aria-describedby="button-addon2" v-model="to_date" disabled>
                    <input type="date" class="form-control " value="To" v-model="to_date">
                </div>
            </div>
            <div class="d-flex h-100">
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize mx-3">{{ $t('exportToPDF') }}</button>
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize">{{ $t('exportToExcel') }}</button>

            </div>
    </div>
    <div v-else class="d-flex mb-3 w-100">
            <div class="d-flex">
                <label class="pe-3 mt-2 text-white">{{ $t('selectDate') }}</label>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75 rounded " :placeholder="$t('from')" aria-label="From date"
                        aria-describedby="button-addon2" v-model="from_date" disabled>
                    <input type="date" class="form-control rounded-start" value="From" v-model="from_date">
                </div>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75 rounded " :placeholder="$t('to')" aria-label="To date"
                        aria-describedby="button-addon2" v-model="to_date" disabled>
                    <input type="date" class="form-control rounded-start" value="To" v-model="to_date">
                </div>
            </div>
            <div class="d-flex h-100">
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize mx-3">{{ $t('exportToPDF') }}</button>
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize">{{ $t('exportToExcel') }}</button>

            </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                from_date: null,
                to_date: null
            }
        },
        computed: {
        isRTL() {
            if(this.$i18n.locale === 'AR'){
                return true;
            }
            return false;
        }
    },
}
</script>

<style scoped>
input[type=date]{
  color:white
}
::-webkit-datetime-edit-text { color:white}
::-webkit-datetime-edit-month-field { display: none }
::-webkit-datetime-edit-day-field { display: none }
::-webkit-datetime-edit-year-field { display: none }
::-webkit-calendar-picker-indicator{ 
  background-image: url('/src/assets/icons/Calender.svg');
      background-position:center;
      background-size:cover;
       background-repeat:no-repeat;
      color:rgba(204,204,204,0);
}
</style>