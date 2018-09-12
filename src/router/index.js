import Vue from "vue";
import Router from "vue-router";
import DisplayMain from "@/components/DisplayMain";
import ControlList from "@/components/ControlList";
import ControlMain from "@/components/ControlMain";
import ControlPage from "@/components/ControlPage";
import DisplayList from "@/components/DisplayList";
import DisplayMap from "@/components/DisplayMap";
import DisplayPage from "@/components/DisplayPage";
import ConnectUrl from "@/components/ConnectUrl";
import ControlColor from "@/components/ControlColor";
import DisplaySelect from "@/components/DisplaySelect";
import DisplayMain1 from "@/components/DisplayMain1";
import DisplayMain2 from "@/components/DisplayMain2";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/displaymain",
      name: "DisplayMain",
      component: DisplayMain
    },
    {
      path: "/displaymap",
      name: "DisplayMap",
      component: DisplayMap
    },
    {
      path: "/displaylist",
      name: "DisplayList",
      component: DisplayList
    },
    {
      path: "/controllist",
      name: "ControlList",
      component: ControlList
    },
    {
      path: "/",
      name: "ControlMain",
      component: ControlMain
    },
    {
      path: "/controlpage",
      name: "ControlPage",
      component: ControlPage
    },
    {
      path: "/displaypage",
      name: "DisplayPage",
      component: DisplayPage
    },
    {
      path: "/connectUrl",
      name: "ConnectUrl",
      component: ConnectUrl
    },
    {
      path: "/controlcolor",
      name: "ControlColor",
      component: ControlColor
    },
    {
      path: "/displayselect",
      name: "DisplaySelect",
      component: DisplaySelect
    },
    {
      path: "/displaymain1",
      name: "DisplayMain1",
      component: DisplayMain1
    },
    {
      path: "/displaymain2",
      name: "DisplayMain2",
      component: DisplayMain2
    }

    
  ]
});
