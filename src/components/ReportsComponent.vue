<template>
    <div class="col-10 ">
        <div class="row mx-3 my-3 text-white">
            <div class="d-flex justify-content-between">
                <div>
                    <h4 class="h1">{{ $t('reports') }}</h4>
                </div>

                <div class="d-flex">
                    <div class="me-3 mt-1 text-center">
                        <img src="../assets/icons/notification-on.svg" alt="notification">
                    </div>
                    <div class="d-flex">
                        <img src="../assets/icons/profile-pic.svg" alt="profile pic" class="me-2">
                        <div class="d-flex flex-column">
                            <small class="mx-2">{{ $t('welcome') }}</small>
                            <SideBarDropDownMenu :text="$t('name')" text_color="text-white"
                                style="padding: 0; margin: 0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mb-3 w-100">
            <div class="d-flex">
                <label class="pe-3 mt-2 text-white">{{ $t('selectDate') }}</label>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75" :placeholder="$t('from')" aria-label="From date"
                        aria-describedby="button-addon2" v-model="from_date">
                    <input type="date" class="form-control " value="From" v-model="from_date">
                </div>
                <div class="input-group mb-3 pe-3 w-25">
                    <input type="text" class="form-control w-75" :placeholder="$t('to')" aria-label="To date"
                        aria-describedby="button-addon2" v-model="to_date">
                    <input type="date" class="form-control " value="To" v-model="to_date">
                </div>
            </div>
            <div class="d-flex h-100">
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize me-3">{{ $t('exportToPDF') }}</button>
                <button type="button" class="btn btn-warning rounded-3 text-white text-capitalize">{{ $t('exportToExcel') }}</button>

            </div>
        </div>
        <!-- second row -->
        <div class="row d-flex flex-row mb-3 w-100">
            <CheckBoxCard :text="$t('totalSales')"
                :discription="$t('checkBoxDiscription')"
                @messageToOutermost="handleMessageFromInnermost" />
            <CheckBoxCard :text="$t('totalFees')"
                :discription="$t('checkBoxDiscription')"
                checked_status="true" />
            <CheckBoxCard :text="$t('playgrounds')"
                :discription="$t('checkBoxDiscription')"
                checked_status="true" />
            <CheckBoxCard :text="$t('subscriptionSales')"
                :discription="$t('checkBoxDiscription')"
                checked_status="true" />
            <CheckBoxCard :text="$t('clients')"
                :discription="$t('checkBoxDiscription')"
                checked_status="true" />
            <CheckBoxCard :text="$t('bankFee')"
                :discription="$t('checkBoxDiscription')"
                checked_status="true" />
        </div>

    </div>

</template>

<script>
    import CheckBoxCard from './CheckBoxCard.vue'
    import SideBarDropDownMenu from '../components/SideBarDropDownMenu.vue'
    export default {
        components: {
            CheckBoxCard
            , SideBarDropDownMenu
        },
        emits: ['messageToOutermost'],
        methods: {
            handleMessageFromInnermost(message) {
                this.$emit('messageToOutermost', message);
            }
        },
        data() {
            return {
                from_date: null,
                to_date: null
            }
        }
    }
</script>

<style>
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
