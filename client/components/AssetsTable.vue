<template>
  <div>
    <!-- <div>{{assets}}</div> -->
    <!-- <div>{{headers}}</div> -->
    <v-card>
      <v-card-title>
        Search Assets
      </v-card-title>

      <v-data-table :headers="headers" :items="assets">
        <template v-slot:top>
          <v-container>
            <v-row>
              <v-text-field
                v-model="searchId"
                label="Search by id (<val, >val, val, <=val, >=val)"
                class="md-2"
                single-line
                outlined
              ></v-text-field>
              <v-text-field
                v-model="searchAssetName"
                label="Search by name"
                class="md-2"
                single-line
                outlined
              ></v-text-field>
              <v-text-field 
                v-model="searchPrice"
                label="Search by price (<val, >val, val, <=val, >=val)"
                class="md-8"
                single-line
                outlined
              ></v-text-field>
              <v-text-field 
                v-model="searchLastUpdated"
                label="Search last updated"
                class="md-2"
                single-line
                outlined
              ></v-text-field>
              <v-text-field
                v-model="searchType"
                label="Search by type"
                class="md-2"
                single-line
                outlined
              ></v-text-field>
            </v-row>
          </v-container>
        </template>
      </v-data-table>
    </v-card>
    <!--items-per-page="30"-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AssetsTable",
  computed: {
    ...mapGetters("assets", ["assets"]),
    headers() {
      return [
        {
          text: "Id",
          value: "id",
          filter: val => {
            if (
              this.searchId == "" ||
              !(this.searchId.match(/(^[><]=?\d+$)|(^\d+$)/))
            ) {
              return true;
            } else {
              let searchId = this.searchId
              if(this.searchId.match(/^\d+$/)) {
                searchId = "==" + searchId
              }  
              return eval(val + searchId);
            }
          }
        },
        {
          text: "Name",
          value: "assetName",
          filter: nameVal => {
            if (this.searchAssetName == "") {
              return true;
            } else {
              return nameVal.match(this.searchAssetName);
            }
          }
        },
        {
          text: "Price",
          value: "price",
          filter: val => {
            if (
              this.searchPrice == "" ||
              !(this.searchPrice.match(/(^[><]=?\d+$)|(^\d+$)/))
            ) {
              return true;
            } else {
              let searchPrice = this.searchPrice
              if(this.searchPrice.match(/^\d+$/)) {
                searchPrice = "==" + searchPrice
              }  
              return eval(val + searchPrice);
            }
          }
        },
        { text: "Last updated", value: "lastUpdate",
          filter: val => {
            if (this.searchLastUpdated == "") {
              return true;
            } else {
              return val.match(this.searchLastUpdated);
            }
          }
        },
        {
          text: "Type",
          value: "type",
          filter: val => {
            if (this.searchType == "") {
              return true;
            } else {
              return val.match(this.searchType);
            }
          }
        }
      ];
    }
  },
  data: () => {
    return {
      searchId: "",
      searchAssetName: "",
      searchType: "",
      searchPrice: "",
      searchLastUpdated: ""
    };
  },
  mounted: function() {
    return this.$store.dispatch("assets/getAllAssets");
  }
};
</script>