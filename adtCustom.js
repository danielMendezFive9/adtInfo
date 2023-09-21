window.Five9.CrmSdk.customComponentsApi().registerCustomComponents({
  template: `<adt-components>
    <adt-component location="3rdPartyComp-li-call-tab" label="3rdPartyComp-li-call-tab" style="flex-direction: column">
      <adt-input value="Initial value" id="aaa1" name="input1" label="Credit card1" placeholder="this is placeholder1"
                 onchange="callTabInputCallback"></adt-input>
      <adt-btn-group label="Group of buttons">
          <!-- comments are ignored and styles are filtered by whitelisting -->
          <adt-button name="button1" label="Yes" class="btnPrimary" style="flex-grow: 1; justify-content: center;"
                      onclick="callTabYesCallback"></adt-button>
          <adt-button name="button2" label="No" class="btnSecondary" style="flex-grow: 1"
                      onclick="callTabNoCallback"></adt-button>
      </adt-btn-group>
    </adt-component>
    <adt-component location="3rdPartyComp-li-call-details-bottom" label="3rdPartyComp-li-call-details-bottom" style="flex-direction: row; justify-content: space-between; align-items: flex-end;">
      <adt-input value="Initial value" name="input2" label="Credit card2" placeholder="this is placeholder1"
                 onchange="callDetailsInputCallback"></adt-input>
      <adt-button name="button3" label="Verify" class="btnPrimary" style="justify-content: center;"
                  onclick="callDetailsButtonCallback"></adt-button>
    </adt-component>
  </adt-components>
  `,
  callbacks: {
    callTabInputCallback: function(params) {
      debugStream.debug({
        callee: arguments.callee.name,
        data: params
      });
    },

    callTabYesCallback: function(params) {
      debugStream.debug({
        callee: arguments.callee.name,
        data: params
      });
    },
    callTabNoCallback: function(params) {
      debugStream.debug({
        callee: arguments.callee.name,
        data: params
      });
    },
    callDetailsInputCallback: function(params) {
      debugStream.debug({
        callee: arguments.callee.name,
        data: params
      });
    },
    callDetailsButtonCallback: function(params) {
      debugStream.debug({
        callee: arguments.callee.name,
        data: params
      });
    }
  }
});
