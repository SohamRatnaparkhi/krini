import React, { useState, useEffect } from "react";
import Content from "./Content";
import { elixirBackend } from "../config";
import axios from "axios";

const Privacy = ({ showToast }) => {
  const [privacyData, setPrivacyData] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(`${elixirBackend}/wc/docs/krini-privacy`);
        setPrivacyData(response.data);
      })();
    } catch (error) {
      showToast("error", "Server error!");
    }
  }, []);

  if (!privacyData) {
    return (
      <div className="pt-28 px-32">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                <div class="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-300 rounded"></div>
            </div>
            <div class="h-2 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                <div class="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 px-32">
      <Content content={privacyData}></Content>
    </div>
  );
};

export default Privacy;
