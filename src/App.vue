<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center mt-8">
          <v-col cols="12">
            <v-form @submit="checkSkylink">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    label="Skylink"
                    v-model="skylink"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    @click="onCheckbox"
                    v-model="timeout1"
                    label="1s"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    @click="onCheckbox"
                    v-model="timeout2"
                    label="2s"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    @click="onCheckbox"
                    v-model="timeout5"
                    label="5s"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    @click="onCheckbox"
                    v-model="timeout10"
                    label="10s"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-data-table
                dense
                sort-desc
                sort-by="health"
                :items="skylinks"
                :headers="headers"
                class="elevation-1"
                :items-per-page="-1"
              >
                <template #[`item.portal`]="{ item }">
                  <div
                    :class="
                      item.portal.includes('net.cool')
                        ? 'light-green--text'
                        : ''
                    "
                  >
                    {{ item.portal }}
                  </div>
                </template>
                <template #[`item.health`]="{ item }">
                  <v-chip dark class="ma-1" :color="healthColor(item.health)">
                    {{ item.health }}
                  </v-chip>
                </template>
                <template #[`item.actions`]="{ item }">
                  <v-btn :loading="item.pinning" @click="pin(item)" small icon>
                    <v-icon>mdi-pin</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
html {
  overflow: auto !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Skylink {
  portal: string;
  health: number;
  timeout: number;
  pinning: boolean;
}

@Component
export default class App extends Vue {
  portals = [
    // "https://eu-fin-1.siasky.net",
    // "https://eu-fin-2.siasky.net",
    // "https://eu-fin-3.siasky.net",
    // "https://eu-fin-4.siasky.net",
    // "https://eu-fin-5.siasky.net",
    // "https://eu-fin-6.siasky.net",
    // "https://eu-fin-9.siasky.net",
    // "https://eu-fin-10.siasky.net",
    // "https://eu-fin-11.siasky.net",
    // "https://eu-fin-12.siasky.net",
    // "https://eu-fin-13.siasky.net",
    // "https://eu-fin-14.siasky.net",
    // "https://eu-fin-15.siasky.net",
    // "https://eu-ger-1.siasky.net",
    // "https://eu-ger-2.siasky.net",
    // "https://eu-ger-3.siasky.net",
    // "https://eu-ger-4.siasky.net",
    // "https://eu-ger-5.siasky.net",
    // "https://eu-ger-6.siasky.net",
    // "https://eu-ger-7.siasky.net",
    // "https://eu-ger-8.siasky.net",
    // "https://eu-ger-9.siasky.net",
    // "https://eu-ger-10.siasky.net",
    // "https://eu-ger-11.siasky.net",
    // "https://eu-ger-12.siasky.net",
    // "https://eu-pol-1.siasky.net",
    // "https://eu-pol-2.siasky.net",
    // "https://eu-pol-3.siasky.net",
    // "https://eu-pol-4.siasky.net",
    // "https://eu-pol-5.siasky.net",
    // "https://us-pa-1.siasky.net",
    // "https://us-pa-2.siasky.net",
    // "https://us-va-1.siasky.net",
    // "https://us-va-2.siasky.net",
    // "https://us-va-3.siasky.net",
    // "https://us-va-4.siasky.net",
    // "https://us-va-5.siasky.net",
    // "https://us-la-2.siasky.net",
    "https://eu-nl-102.skynetfree.net",
    "https://eu-nl-103.skynetfree.net",
    "https://eu-nl-104.skynetfree.net",
    "https://eu-nl-101.skynetpro.net",
    "https://eu-pol-101.skynetpro.net",
    "https://eu-pol-102.skynetpro.net",
    "https://us-va-101.skynetpro.net",
    // "https://us-tx-101.skynetpro.net",
    // "https://us-tx-102.skynetpro.net",
    "https://web3portal.com",
    "https://skynet.cool",
  ];
  skylink = "";
  pinLoading = -1;
  skylinks: Skylink[] = [];
  headers = [
    { text: "Portal", value: "portal" },
    { text: "Health", value: "health" },
    { text: "Timeout", value: "timeout", width: 100 },
    { text: "Pin", value: "actions", sortable: false, width: 24 },
  ];
  timeouts = [1, 2, 5];
  timeout1 = true;
  timeout2 = true;
  timeout5 = true;
  timeout10 = false;

  async getHealth(index: number) {
    const portal = this.portals[index];
    for (const t of this.timeouts) {
      try {
        const res = await fetch(
          `${portal}/skynet/health/skylink/${this.skylink}?nocache=true&timeout=${t}`,
          { headers: this.fetchHeaders(portal) }
        );
        const data = await res.json();
        this.$set(this.skylinks, index, {
          portal: new URL(portal).host,
          health: data?.basesectorredundancy ?? 0,
          timeout: t,
        });
      } catch (error) {
        console.error(error);
        this.$set(this.skylinks, index, {
          portal: new URL(portal).host,
          health: -1,
          timeout: t,
        });
      }
    }
  }

  async checkSkylink(e: Event) {
    e.preventDefault();
    this.skylinks = [];
    this.portals.forEach((portal, index) => {
      this.getHealth(index);
      this.$set(this.skylinks, index, {
        portal: new URL(portal).host,
        pinning: false,
        timeout: 1,
        health: 0,
      });
    });
  }

  togglePinning(item: Skylink, value: boolean) {
    const index = this.skylinks.indexOf(item);
    this.$set(this.skylinks, index, {
      ...item,
      ...{ pinning: value },
    });
  }

  async pin(item: Skylink) {
    const index = this.skylinks.indexOf(item);
    const portal = this.portals[index];

    try {
      this.togglePinning(item, true);
      await fetch(`${portal}/skynet/pin/${this.skylink}`, {
        headers: this.fetchHeaders(portal),
        method: "POST",
      });
      this.togglePinning(item, false);
      this.getHealth(index);
    } catch (error) {
      console.error(error);
      this.togglePinning(item, false);
      this.getHealth(index);
    }
  }

  fetchHeaders(portal: string) {
    let headers = {};
    if (portal.includes("skynetfree.net")) {
      headers = { "Skynet-Api-Key": process.env.SKYNETFREE_API_KEY };
    } else if (portal.includes("skynetpro.net")) {
      headers = { "Skynet-Api-Key": process.env.SKYNETPRO_API_KEY };
    } else if (portal.includes("skynet.cool")) {
      headers = { "Skynet-Api-Key": process.env.SKYNETCOOL_API_KEY };
    }
    return headers;
  }

  healthColor(health: number) {
    if (health >= 10) return "green";
    else if (health >= 6) return "light-green";
    else if (health >= 3) return "amber";
    else return "red";
  }

  onCheckbox() {
    let newTimeouts = [];
    if (this.timeout1) newTimeouts.push(1);
    if (this.timeout2) newTimeouts.push(2);
    if (this.timeout5) newTimeouts.push(5);
    if (this.timeout10) newTimeouts.push(10);
    this.timeouts = newTimeouts;
  }
}
</script>
