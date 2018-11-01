<template>
  <v-app>
    <v-navigation-drawer app dark class="black">
      <v-toolbar flat color="black" dark class="pa-4">
        <v-container fluid fill-height justify-center>
          <div>
            <img src="/log_admin.png">
          </div>
        </v-container>
      </v-toolbar>
      <v-divider style="height:2px;"></v-divider>
      <v-list>
        <v-list-tile avatar to="/sales">
          <v-list-tile-avatar>
            <v-icon>fas fa-coins</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Sales
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar to="/artworks">
          <v-list-tile-avatar>
            <v-icon>far fa-file-image</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Artworks
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar to="/shipments">
          <v-list-tile-avatar>
            <v-icon>fas fa-shipping-fast</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Shipments
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>fas fa-palette</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Creators
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>far fa-user</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Users
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>fas fa-hand-holding-heart</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Charities
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              Sign Out
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>  
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {};
</script>


<style>
* {
  font-family: "Nunito", "sans-serif";
}
._btn {
  text-transform: none;
}
</style>

