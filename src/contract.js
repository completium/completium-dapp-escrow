/*const EscrowContractCode = [
  { "prim": "parameter",
    "args":
  [ { "prim": "or",
      "args":
        [ { "prim": "unit", "annots": [ "%default" ] },
          { "prim": "pair",
            "args":
              [ { "prim": "pair",
                  "args":
                    [ { "prim": "nat",
                        "annots": [ "%counter" ] },
                      { "prim": "or",
                        "args":
                          [ { "prim": "lambda",
                              "args":
                                [ { "prim": "unit" },
                                  { "prim": "list",
                                    "args":
                                      [ { "prim":
                                            "operation" } ] } ],
                              "annots":
                                [ "%operation" ] },
                            { "prim": "pair",
                              "args":
                                [ { "prim": "nat",
                                    "annots":
                                      [ "%threshold" ] },
                                  { "prim": "list",
                                    "args":
                                      [ { "prim": "key" } ],
                                    "annots":
                                      [ "%keys" ] } ],
                              "annots":
                                [ "%change_keys" ] } ],
                        "annots": [ ":action" ] } ],
                  "annots": [ ":payload" ] },
                { "prim": "list",
                  "args":
                    [ { "prim": "option",
                        "args":
                          [ { "prim": "signature" } ] } ],
                  "annots": [ "%sigs" ] } ],
            "annots": [ "%main" ] } ] } ] },
  { "prim": "storage",
"args":
  [ { "prim": "pair",
      "args":
        [ { "prim": "nat",
            "annots": [ "%stored_counter" ] },
          { "prim": "pair",
            "args":
              [ { "prim": "nat",
                  "annots": [ "%threshold" ] },
                { "prim": "list",
                  "args": [ { "prim": "key" } ],
                  "annots": [ "%keys" ] } ] } ] } ] },
  { "prim": "code",
"args":
  [ [ [ [ { "prim": "DUP" }, { "prim": "CAR" },
          { "prim": "DIP",
            "args": [ [ { "prim": "CDR" } ] ] } ] ],
      { "prim": "IF_LEFT",
        "args":
          [ [ { "prim": "DROP" },
              { "prim": "NIL",
                "args": [ { "prim": "operation" } ] },
              { "prim": "PAIR" } ],
            [ { "prim": "PUSH",
                "args":
                  [ { "prim": "mutez" },
                    { "int": "0" } ] },
              { "prim": "AMOUNT" },
              [ [ { "prim": "COMPARE" },
                  { "prim": "EQ" } ],
                { "prim": "IF",
                  "args":
                    [ [],
                      [ [ { "prim": "UNIT" },
                          { "prim": "FAILWITH" } ] ] ] } ],
              { "prim": "SWAP" }, { "prim": "DUP" },
              { "prim": "DIP",
                "args": [ [ { "prim": "SWAP" } ] ] },
              { "prim": "DIP",
                "args":
                  [ [ [ [ { "prim": "DUP" },
                          { "prim": "CAR" },
                          { "prim": "DIP",
                            "args":
                              [ [ { "prim": "CDR" } ] ] } ] ],
                      { "prim": "DUP" },
                      { "prim": "SELF" },
                      { "prim": "ADDRESS" },
                      { "prim": "PAIR" },
                      { "prim": "PACK" },
                      { "prim": "DIP",
                        "args":
                          [ [ [ [ { "prim": "DUP" },
                                  { "prim": "CAR",
                                    "annots":
                                      [ "@counter" ] },
                                  { "prim": "DIP",
                                    "args":
                                      [ [ { "prim":
                                              "CDR" } ] ] } ] ],
                              { "prim": "DIP",
                                "args":
                                  [ [ { "prim": "SWAP" } ] ] } ] ] },
                      { "prim": "SWAP" } ] ] },
              [ [ { "prim": "DUP" },
                  { "prim": "CAR",
                    "annots": [ "@stored_counter" ] },
                  { "prim": "DIP",
                    "args": [ [ { "prim": "CDR" } ] ] } ] ],
              { "prim": "DIP",
                "args": [ [ { "prim": "SWAP" } ] ] },
              [ [ { "prim": "COMPARE" },
                  { "prim": "EQ" } ],
                { "prim": "IF",
                  "args":
                    [ [],
                      [ [ { "prim": "UNIT" },
                          { "prim": "FAILWITH" } ] ] ] } ],
              { "prim": "DIP",
                "args": [ [ { "prim": "SWAP" } ] ] },
              [ [ { "prim": "DUP" },
                  { "prim": "CAR",
                    "annots": [ "@threshold" ] },
                  { "prim": "DIP",
                    "args":
                      [ [ { "prim": "CDR",
                            "annots": [ "@keys" ] } ] ] } ] ],
              { "prim": "DIP",
                "args":
                  [ [ { "prim": "PUSH",
                        "args":
                          [ { "prim": "nat" },
                            { "int": "0" } ],
                        "annots": [ "@valid" ] },
                      { "prim": "SWAP" },
                      { "prim": "ITER",
                        "args":
                          [ [ { "prim": "DIP",
                                "args":
                                  [ [ { "prim": "SWAP" } ] ] },
                              { "prim": "SWAP" },
                              { "prim": "IF_CONS",
                                "args":
                                  [ [ [ { "prim":
                                            "IF_NONE",
                                          "args":
                                            [ [ { "prim":
                                              "SWAP" },
                                              { "prim":
                                              "DROP" } ],
                                              [ { "prim":
                                              "SWAP" },
                                              { "prim":
                                              "DIP",
                                              "args":
                                              [ [ { "prim":
                                              "SWAP" },
                                              { "prim":
                                              "DIP",
                                              "args":
                                              [ { "int":
                                              "2" },
                                              [ [ { "prim":
                                              "DIP",
                                              "args":
                                              [ [ { "prim":
                                              "DUP" } ] ] },
                                              { "prim":
                                              "SWAP" } ] ] ] },
                                              [ [ { "prim":
                                              "DIP",
                                              "args":
                                              [ { "int":
                                              "2" },
                                              [ { "prim":
                                              "DUP" } ] ] },
                                              { "prim":
                                              "DIG",
                                              "args":
                                              [ { "int":
                                              "3" } ] } ],
                                              { "prim":
                                              "DIP",
                                              "args":
                                              [ [ { "prim":
                                              "CHECK_SIGNATURE" } ] ] },
                                              { "prim":
                                              "SWAP" },
                                              { "prim":
                                              "IF",
                                              "args":
                                              [ [ { "prim":
                                              "DROP" } ],
                                              [ { "prim":
                                              "FAILWITH" } ] ] } ],
                                              { "prim":
                                              "PUSH",
                                              "args":
                                              [ { "prim":
                                              "nat" },
                                              { "int":
                                              "1" } ] },
                                              { "prim":
                                              "ADD",
                                              "annots":
                                              [ "@valid" ] } ] ] } ] ] } ] ],
                                    [ [ { "prim":
                                            "UNIT" },
                                        { "prim":
                                            "FAILWITH" } ] ] ] },
                              { "prim": "SWAP" } ] ] } ] ] },
              [ [ { "prim": "COMPARE" },
                  { "prim": "LE" } ],
                { "prim": "IF",
                  "args":
                    [ [],
                      [ [ { "prim": "UNIT" },
                          { "prim": "FAILWITH" } ] ] ] } ],
              { "prim": "IF_CONS",
                "args":
                  [ [ [ { "prim": "UNIT" },
                        { "prim": "FAILWITH" } ] ],
                    [] ] }, { "prim": "DROP" },
              { "prim": "DIP",
                "args":
                  [ [ [ [ { "prim": "DUP" },
                          { "prim": "CAR" },
                          { "prim": "DIP",
                            "args":
                              [ [ { "prim": "CDR" } ] ] } ] ],
                      { "prim": "PUSH",
                        "args":
                          [ { "prim": "nat" },
                            { "int": "1" } ] },
                      { "prim": "ADD",
                        "annots": [ "@new_counter" ] },
                      { "prim": "PAIR" } ] ] },
              { "prim": "IF_LEFT",
                "args":
                  [ [ { "prim": "UNIT" },
                      { "prim": "EXEC" } ],
                    [ { "prim": "DIP",
                        "args":
                          [ [ { "prim": "CAR" } ] ] },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "NIL",
                        "args":
                          [ { "prim": "operation" } ] } ] ] },
              { "prim": "PAIR" } ] ] } ] ] } ]*/

const EscrowContractCode = [
  {
    "prim": "storage",
    "args":
      [{
        "prim": "pair",
        "args":
          [{
            "prim": "address",
            "annots": ["%seller"]
          },
          {
            "prim": "pair",
            "args":
              [{
                "prim": "address",
                "annots": ["%buyer"]
              },
              {
                "prim": "pair",
                "args":
                  [{
                    "prim": "address",
                    "annots": ["%taxcollector"]
                  },
                  {
                    "prim": "pair",
                    "args":
                      [{
                        "prim": "mutez",
                        "annots": ["%price"]
                      },
                      {
                        "prim": "int",
                        "annots": ["%_state"]
                      }]
                  }]
              }]
          }]
      }]
  },
  {
    "prim": "parameter",
    "args":
      [{
        "prim": "or",
        "args":
          [{
            "prim": "unit",
            "annots": ["%abortCreated"]
          },
          {
            "prim": "or",
            "args":
              [{
                "prim": "unit",
                "annots": ["%abortFunded"]
              },
              {
                "prim": "or",
                "args":
                  [{
                    "prim": "unit",
                    "annots": ["%abort"]
                  },
                  {
                    "prim": "or",
                    "args":
                      [{
                        "prim": "unit",
                        "annots": ["%fund"]
                      },
                      {
                        "prim": "unit",
                        "annots": ["%complete"]
                      }]
                  }]
              }]
          }]
      }]
  },
  {
    "prim": "code",
    "args":
      [[{
        "prim": "NIL",
        "args": [{ "prim": "operation" }]
      },
      { "prim": "DIG", "args": [{ "int": "1" }] },
      [[{ "prim": "DUP" }, { "prim": "CAR" },
      {
        "prim": "DIP",
        "args": [[{ "prim": "CDR" }]]
      }]],
      {
        "prim": "DIP",
        "args":
          [[[[{ "prim": "DUP" }, { "prim": "CAR" },
          {
            "prim": "DIP",
            "args": [[{ "prim": "CDR" }]]
          }]],
          { "prim": "SWAP" },
          [[{ "prim": "DUP" }, { "prim": "CAR" },
          {
            "prim": "DIP",
            "args": [[{ "prim": "CDR" }]]
          }]],
          { "prim": "SWAP" },
          [[{ "prim": "DUP" }, { "prim": "CAR" },
          {
            "prim": "DIP",
            "args": [[{ "prim": "CDR" }]]
          }]],
          { "prim": "SWAP" },
          [[{ "prim": "DUP" }, { "prim": "CAR" },
          {
            "prim": "DIP",
            "args": [[{ "prim": "CDR" }]]
          }]],
          { "prim": "SWAP" }]]
      },
      {
        "prim": "IF_LEFT",
        "args":
          [[{ "prim": "DROP" },
          {
            "prim": "DIG",
            "args": [{ "int": "3" }]
          },
          { "prim": "DUP" },
          {
            "prim": "DUG",
            "args": [{ "int": "4" }]
          },
          { "prim": "SENDER" },
          { "prim": "COMPARE" }, { "prim": "EQ" },
          { "prim": "NOT" },
          {
            "prim": "IF",
            "args":
              [[{
                "prim": "PUSH",
                "args":
                  [{ "prim": "string" },
                  { "string": "InvalidCaller" }]
              },
              { "prim": "FAILWITH" }], []]
          },
          {
            "prim": "PUSH",
            "args":
              [{ "prim": "int" }, { "int": "0" }]
          },
          {
            "prim": "DIG",
            "args": [{ "int": "1" }]
          },
          { "prim": "DUP" },
          {
            "prim": "DUG",
            "args": [{ "int": "2" }]
          },
          { "prim": "COMPARE" }, { "prim": "EQ" },
          {
            "prim": "IF",
            "args":
              [[{
                "prim": "PUSH",
                "args":
                  [{ "prim": "int" },
                  { "int": "1" }]
              },
              { "prim": "SWAP" },
              { "prim": "DROP" }],
              [{
                "prim": "PUSH",
                "args":
                  [{ "prim": "string" },
                  { "string": "InvalidState" }]
              },
              { "prim": "FAILWITH" }]]
          },
          { "prim": "SWAP" }, { "prim": "PAIR" },
          { "prim": "SWAP" }, { "prim": "PAIR" },
          { "prim": "SWAP" }, { "prim": "PAIR" },
          { "prim": "SWAP" }, { "prim": "PAIR" },
          {
            "prim": "DIG",
            "args": [{ "int": "1" }]
          },
          { "prim": "PAIR" }],
          [{
            "prim": "IF_LEFT",
            "args":
              [[{ "prim": "DROP" },
              {
                "prim": "DIG",
                "args": [{ "int": "3" }]
              },
              { "prim": "DUP" },
              {
                "prim": "DUG",
                "args": [{ "int": "4" }]
              },
              { "prim": "SENDER" },
              { "prim": "COMPARE" },
              { "prim": "EQ" },
              { "prim": "NOT" },
              {
                "prim": "IF",
                "args":
                  [[{
                    "prim": "PUSH",
                    "args":
                      [{ "prim": "string" },
                      {
                        "string":
                          "InvalidCaller"
                      }]
                  },
                  { "prim": "FAILWITH" }],
                  []]
              },
              {
                "prim": "PUSH",
                "args":
                  [{ "prim": "int" },
                  { "int": "2" }]
              },
              {
                "prim": "DIG",
                "args": [{ "int": "1" }]
              },
              { "prim": "DUP" },
              {
                "prim": "DUG",
                "args": [{ "int": "2" }]
              },
              { "prim": "COMPARE" },
              { "prim": "EQ" },
              {
                "prim": "IF",
                "args":
                  [[{
                    "prim": "PUSH",
                    "args":
                      [{ "prim": "int" },
                      { "int": "1" }]
                  },
                  { "prim": "SWAP" },
                  { "prim": "DROP" }],
                  [{
                    "prim": "PUSH",
                    "args":
                      [{ "prim": "string" },
                      {
                        "string":
                          "InvalidState"
                      }]
                  },
                  { "prim": "FAILWITH" }]]
              },
              { "prim": "SWAP" },
              { "prim": "PAIR" },
              { "prim": "SWAP" },
              { "prim": "PAIR" },
              { "prim": "SWAP" },
              { "prim": "PAIR" },
              { "prim": "SWAP" },
              { "prim": "PAIR" },
              {
                "prim": "DIG",
                "args": [{ "int": "1" }]
              },
              { "prim": "PAIR" }],
              [{
                "prim": "IF_LEFT",
                "args":
                  [[{ "prim": "DROP" },
                  {
                    "prim": "PUSH",
                    "args":
                      [{
                        "prim":
                          "timestamp"
                      },
                      {
                        "int":
                          "1605024984"
                      }]
                  },
                  { "prim": "NOW" },
                  { "prim": "COMPARE" },
                  { "prim": "GT" },
                  {
                    "prim": "IF",
                    "args":
                      [[{
                        "prim": "PUSH",
                        "args":
                          [{
                            "prim":
                              "int"
                          },
                          {
                            "int":
                              "1"
                          }]
                      },
                      { "prim": "SWAP" },
                      { "prim": "DROP" }],
                      []]
                  },
                  { "prim": "SWAP" },
                  { "prim": "PAIR" },
                  { "prim": "SWAP" },
                  { "prim": "PAIR" },
                  { "prim": "SWAP" },
                  { "prim": "PAIR" },
                  { "prim": "SWAP" },
                  { "prim": "PAIR" },
                  {
                    "prim": "DIG",
                    "args":
                      [{ "int": "1" }]
                  },
                  { "prim": "PAIR" }],
                  [{
                    "prim": "IF_LEFT",
                    "args":
                      [[{ "prim": "DROP" },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "3"
                          }]
                      },
                      { "prim": "DUP" },
                      {
                        "prim": "DUG",
                        "args":
                          [{
                            "int":
                              "4"
                          }]
                      },
                      {
                        "prim":
                          "SENDER"
                      },
                      {
                        "prim":
                          "COMPARE"
                      },
                      { "prim": "EQ" },
                      { "prim": "NOT" },
                      {
                        "prim": "IF",
                        "args":
                          [[{
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "string"
                              },
                              {
                                "string":
                                  "InvalidCaller"
                              }]
                          },
                          {
                            "prim":
                              "FAILWITH"
                          }],
                          []]
                      },
                      {
                        "prim": "PUSH",
                        "args":
                          [{
                            "prim":
                              "int"
                          },
                          {
                            "int":
                              "0"
                          }]
                      },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "1"
                          }]
                      },
                      { "prim": "DUP" },
                      {
                        "prim": "DUG",
                        "args":
                          [{
                            "int":
                              "2"
                          }]
                      },
                      {
                        "prim":
                          "COMPARE"
                      },
                      { "prim": "EQ" },
                      {
                        "prim": "IF",
                        "args":
                          [[{
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "1"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "2"
                              }]
                          },
                          {
                            "prim":
                              "UNIT"
                          },
                          {
                            "prim":
                              "LEFT",
                            "args":
                              [{
                                "prim":
                                  "unit"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "nat"
                              },
                              {
                                "int":
                                  "10"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "11"
                              }]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "UNIT"
                          },
                          {
                            "prim":
                              "LEFT",
                            "args":
                              [{
                                "prim":
                                  "unit"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "nat"
                              },
                              {
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "1"
                              }]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "nat"
                              },
                              {
                                "int":
                                  "1"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "1"
                              }]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[[[{
                                "prim":
                                  "DUP"
                              },
                              {
                                "prim":
                                  "CAR"
                              },
                              {
                                "prim":
                                  "DIP",
                                "args":
                                  [[{
                                    "prim":
                                      "CDR"
                                  }]]
                              }]],
                              {
                                "prim":
                                  "SWAP"
                              },
                              {
                                "prim":
                                  "DUP"
                              }]]
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "SWAP"
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "MUL"
                              }]]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "IF_LEFT",
                            "args":
                              [[{
                                "prim":
                                  "DROP"
                              },
                              {
                                "prim":
                                  "ADD"
                              }],
                              [{
                                "prim":
                                  "DROP"
                              },
                              {
                                "prim":
                                  "SWAP"
                              },
                              {
                                "prim":
                                  "SUB"
                              }]]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[[[{
                                "prim":
                                  "DUP"
                              },
                              {
                                "prim":
                                  "CAR"
                              },
                              {
                                "prim":
                                  "DIP",
                                "args":
                                  [[{
                                    "prim":
                                      "CDR"
                                  }]]
                              }]],
                              {
                                "prim":
                                  "SWAP"
                              },
                              {
                                "prim":
                                  "DUP"
                              }]]
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "SWAP"
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "MUL"
                              }]]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "IF_LEFT",
                            "args":
                              [[{
                                "prim":
                                  "DROP"
                              },
                              {
                                "prim":
                                  "ADD"
                              }],
                              [{
                                "prim":
                                  "DROP"
                              },
                              {
                                "prim":
                                  "SWAP"
                              },
                              {
                                "prim":
                                  "SUB"
                              }]]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "ABS"
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "2"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "EDIV"
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "DivByZero"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "AMOUNT"
                          },
                          {
                            "prim":
                              "COMPARE"
                          },
                          {
                            "prim":
                              "GE"
                          },
                          {
                            "prim":
                              "IF",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "int"
                                  },
                                  {
                                    "int":
                                      "2"
                                  }]
                              },
                              {
                                "prim":
                                  "SWAP"
                              },
                              {
                                "prim":
                                  "DROP"
                              }],
                              []]
                          }],
                          [{
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "string"
                              },
                              {
                                "string":
                                  "InvalidState"
                              }]
                          },
                          {
                            "prim":
                              "FAILWITH"
                          }]]
                      },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "1"
                          }]
                      },
                      { "prim": "PAIR" }],
                      [{ "prim": "DROP" },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "3"
                          }]
                      },
                      { "prim": "DUP" },
                      {
                        "prim": "DUG",
                        "args":
                          [{
                            "int":
                              "4"
                          }]
                      },
                      {
                        "prim":
                          "SENDER"
                      },
                      {
                        "prim":
                          "COMPARE"
                      },
                      { "prim": "EQ" },
                      { "prim": "NOT" },
                      {
                        "prim": "IF",
                        "args":
                          [[{
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "string"
                              },
                              {
                                "string":
                                  "InvalidCaller"
                              }]
                          },
                          {
                            "prim":
                              "FAILWITH"
                          }],
                          []]
                      },
                      {
                        "prim": "PUSH",
                        "args":
                          [{
                            "prim":
                              "int"
                          },
                          {
                            "int":
                              "2"
                          }]
                      },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "1"
                          }]
                      },
                      { "prim": "DUP" },
                      {
                        "prim": "DUG",
                        "args":
                          [{
                            "int":
                              "2"
                          }]
                      },
                      {
                        "prim":
                          "COMPARE"
                      },
                      { "prim": "EQ" },
                      {
                        "prim": "IF",
                        "args":
                          [[{
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "6"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "6"
                              }]
                          },
                          {
                            "prim":
                              "CONTRACT",
                            "args":
                              [{
                                "prim":
                                  "unit"
                              }]
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "BadContract"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "UNIT"
                          },
                          {
                            "prim":
                              "TRANSFER_TOKENS"
                          },
                          {
                            "prim":
                              "CONS"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "DIG",
                                "args":
                                  [{
                                    "int":
                                      "5"
                                  }]
                              },
                              {
                                "prim":
                                  "DROP"
                              }]]
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "6"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "CONTRACT",
                            "args":
                              [{
                                "prim":
                                  "unit"
                              }]
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "BadContract"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "nat"
                              },
                              {
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "1"
                              }]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "ABS"
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "2"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "EDIV"
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "DivByZero"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "UNIT"
                          },
                          {
                            "prim":
                              "TRANSFER_TOKENS"
                          },
                          {
                            "prim":
                              "CONS"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "DIG",
                                "args":
                                  [{
                                    "int":
                                      "5"
                                  }]
                              },
                              {
                                "prim":
                                  "DROP"
                              }]]
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "6"
                              }]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "CONTRACT",
                            "args":
                              [{
                                "prim":
                                  "unit"
                              }]
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "BadContract"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "3"
                              }]
                          },
                          {
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "nat"
                              },
                              {
                                "int":
                                  "10"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "11"
                              }]
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          {
                            "prim":
                              "PAIR"
                          },
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          [[{
                            "prim":
                              "DUP"
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "CDR"
                              }]]
                          }]],
                          {
                            "prim":
                              "ABS"
                          },
                          {
                            "prim":
                              "DIG",
                            "args":
                              [{
                                "int":
                                  "2"
                              }]
                          },
                          {
                            "prim":
                              "MUL"
                          },
                          {
                            "prim":
                              "EDIV"
                          },
                          {
                            "prim":
                              "IF_NONE",
                            "args":
                              [[{
                                "prim":
                                  "PUSH",
                                "args":
                                  [{
                                    "prim":
                                      "string"
                                  },
                                  {
                                    "string":
                                      "DivByZero"
                                  }]
                              },
                              {
                                "prim":
                                  "FAILWITH"
                              }],
                              []]
                          },
                          {
                            "prim":
                              "CAR"
                          },
                          {
                            "prim":
                              "UNIT"
                          },
                          {
                            "prim":
                              "TRANSFER_TOKENS"
                          },
                          {
                            "prim":
                              "CONS"
                          },
                          {
                            "prim":
                              "DIP",
                            "args":
                              [[{
                                "prim":
                                  "DIG",
                                "args":
                                  [{
                                    "int":
                                      "5"
                                  }]
                              },
                              {
                                "prim":
                                  "DROP"
                              }]]
                          },
                          {
                            "prim":
                              "DUG",
                            "args":
                              [{
                                "int":
                                  "5"
                              }]
                          },
                          {
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "int"
                              },
                              {
                                "int":
                                  "4"
                              }]
                          },
                          {
                            "prim":
                              "SWAP"
                          },
                          {
                            "prim":
                              "DROP"
                          }],
                          [{
                            "prim":
                              "PUSH",
                            "args":
                              [{
                                "prim":
                                  "string"
                              },
                              {
                                "string":
                                  "InvalidState"
                              }]
                          },
                          {
                            "prim":
                              "FAILWITH"
                          }]]
                      },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      { "prim": "SWAP" },
                      { "prim": "PAIR" },
                      {
                        "prim": "DIG",
                        "args":
                          [{
                            "int":
                              "1"
                          }]
                      },
                      { "prim": "PAIR" }]]
                  }]]
              }]]
          }]]
      }]]
  }]

export default EscrowContractCode;

