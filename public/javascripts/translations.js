I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","new":{"resend":"Resend confirmation instructions"},"send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"confirm_my_account":"Confirm my account","subject":"Confirmation instructions","welcome":"Welcome","you_can_confirm_your_account":"you can confirm your account"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"send_me_reset_password_instructions":{"change_my_password":"Change my password","hello":"hello","some_one":"Some one charge your password"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"edit":{"change_my_password":"Change my password"},"new":{"email":"Email","forgot_your_password":"Forgot Your Password","send_me_reset_password_instructions":"Send me reset password instructions"},"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","new":{"email":"Email","name":"Name","password":"Password","password_confirmation":"Password Confirmation","sign_up":"Sign up","you_have_account":"Do you have account ?"},"signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","new":{"login":"Login"},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"javascript":{"max_file_size":"lol"},"layouts":{"application":{"rubyonrails":"Ruby on rails"},"footer":{"address":"Address: 25T2, Hoang Dao Thuy street, Ha Noi","email":"Framgia@hotmail.com","framgia_vn":"Framgia Viet Nam","phone":"12345678"},"header":{"fake_book":"FAKE BOOK","help":"Help","home":"Home","login":"Login"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"posts":{"create":{"post_created!":"Post created !"},"destroy":{"post_deleted":"Post deleted!","post_deleted_fail":"Post deleted fail!"},"post":{"you_sure":"Are you sure ?"}},"ransack":{"all":"all","and":"and","any":"any","asc":"ascending","attribute":"attribute","combinator":"combinator","condition":"condition","desc":"descending","or":"or","predicate":"predicate","predicates":{"blank":"is blank","cont":"contains","cont_all":"contains all","cont_any":"contains any","does_not_match":"doesn't match","does_not_match_all":"doesn't match all","does_not_match_any":"doesn't match any","end":"ends with","end_all":"ends with all","end_any":"ends with any","eq":"equals","eq_all":"equals all","eq_any":"equals any","false":"is false","gt":"greater than","gt_all":"greater than all","gt_any":"greater than any","gteq":"greater than or equal to","gteq_all":"greater than or equal to all","gteq_any":"greater than or equal to any","in":"in","in_all":"in all","in_any":"in any","lt":"less than","lt_all":"less than all","lt_any":"less than any","lteq":"less than or equal to","lteq_all":"less than or equal to all","lteq_any":"less than or equal to any","matches":"matches","matches_all":"matches all","matches_any":"matches any","not_cont":"doesn't contain","not_cont_all":"doesn't contain all","not_cont_any":"doesn't contain any","not_end":"doesn't end with","not_end_all":"doesn't end with all","not_end_any":"doesn't end with any","not_eq":"not equal to","not_eq_all":"not equal to all","not_eq_any":"not equal to any","not_in":"not in","not_in_all":"not in all","not_in_any":"not in any","not_null":"is not null","not_start":"doesn't start with","not_start_all":"doesn't start with all","not_start_any":"doesn't start with any","null":"is null","present":"is present","start":"starts with","start_all":"starts with all","start_any":"starts with any","true":"is true"},"search":"search","sort":"sort","value":"value"},"shared":{"error_message":{"error":"error"},"post_form":{"compose_new_post":"Write new post here...","post":"Post"}},"static_pages":{"help":{"good_luck":"Good luck !","google":"Google.com","help":"Help","if_you_have":"If you have any question, Let search: "},"home":{"fake_book":"Fake book","this_is_the_home_page":"Let's share your world with us.","welcome":"Welcome"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
I18n.translations["ja"] = I18n.extend((I18n.translations["ja"] || {}), {"ransack":{"all":"全て","and":"と","any":"いずれか","asc":"昇順","attribute":"属性","combinator":"組み合わせ","condition":"状態","desc":"降順","or":"あるいは","predicate":"は以下である","predicates":{"blank":"は空である","cont":"は以下を含む","cont_all":"は以下の全てを含む","cont_any":"はいずれかを含む","does_not_match":"は以下と合致していない","does_not_match_all":"は以下の全てに合致していない","does_not_match_any":"は以下のいずれかに合致していない","end":"は以下で終わる","end_all":"は以下の全てで終わる","end_any":"は以下のいずれかで終わる","eq":"は以下と等しい","eq_all":"は以下の全てに等しい","eq_any":"は以下のいずれかに等しい","false":"偽","gt":"は以下より大きい","gt_all":"は以下の全てより大きい","gt_any":"は以下のいずれかより大きい","gteq":"は以下より大きいか等しい","gteq_all":"は以下の全てより大きいか等しい","gteq_any":"は以下のいずれかより大きいか等しい","in":"は以下の範囲内である","in_all":"は以下の全ての範囲内である","in_any":"は以下のいずれかの範囲内である","lt":"は以下よりも小さい","lt_all":"は以下の全てよりも小さい","lt_any":"は以下のいずれかより小さい","lteq":"は以下より小さいか等しい","lteq_all":"は以下の全てより小さいか等しい","lteq_any":"は以下のいずれかより小さいか等しい","matches":"は以下と合致している","matches_all":"は以下の全てと合致している","matches_any":"は以下のいずれかと合致している","not_cont":"は含まない","not_cont_all":"は以下の全てを含まない","not_cont_any":"は以下のいずれかを含まない","not_end":"は以下のどれでも終わらない","not_end_all":"は以下の全てで終わらない","not_end_any":"は以下のいずれかで終わらない","not_eq":"は以下と等しくない","not_eq_all":"は以下の全てと等しくない","not_eq_any":"は以下のいずれかに等しくない","not_in":"は以下の範囲内でない","not_in_all":"は以下の全ての範囲内","not_in_any":"は以下のいずれかの範囲内でない","not_null":"は無効ではない","not_start":"は以下で始まらない","not_start_all":"は以下の全てで始まらない","not_start_any":"は以下のいずれかで始まらない","null":"無効","present":"は存在する","start":"は以下で始まる","start_all":"は以下の全てで始まる","start_any":"は以下のどれかで始まる","true":"真"},"search":"検索","sort":"分類","value":"値"}});
I18n.translations["id"] = I18n.extend((I18n.translations["id"] || {}), {"ransack":{"all":"semua","and":"dan","any":"apapun","asc":"ascending","attribute":"atribut","combinator":"kombinasi","condition":"kondisi","desc":"descending","or":"atau","predicate":"predikat","predicates":{"blank":"kosong","cont":"mengandung","cont_all":"mengandung semua","cont_any":"mengandung beberapa","does_not_match":"tidak mirip dengan","does_not_match_all":"tidak mirip semua dengan","does_not_match_any":"tidak mirip beberapa dengan","end":"diakhiri dengan","end_all":"diakhiri semua dengan","end_any":"diakhiri beberapa dengan","eq":"sama dengan","eq_all":"sama seluruhnya dengan","eq_any":"sama beberapa dengan","false":"bernilai salah","gt":"lebih besar daripada","gt_all":"lebih besar semua dengan","gt_any":"lebih besar beberapa dengan","gteq":"lebih besar atau sama dengan","gteq_all":"semua lebih besar atau sama dengan","gteq_any":"beberapa lebih besar atau sama dengan","in":"di","in_all":"di semua","in_any":"di beberapa","lt":"kurang dari","lt_all":"kurang seluruhnya dengan","lt_any":"kurang beberapa dengan","lteq":"kurang lebih","lteq_all":"kurang lebih semua dengan","lteq_any":"kurang lebih beberapa dengan","matches":"mirip","matches_all":"mirip semua dengan","matches_any":"mirip beberapa dengan","not_cont":"tidak mengandung","not_cont_all":"tidak mengandung semua","not_cont_any":"tidak mengandung beberapa","not_end":"tidak diakhiri dengan","not_end_all":"tidak diakhiri dengan semua","not_end_any":"tidak diakhiri dengan beberapa","not_eq":"tidak sama dengan","not_eq_all":"tidak semua seluruhnya dengan","not_eq_any":"tidak sama beberapa dengan","not_in":"tidak di","not_in_all":"tidak semua di","not_in_any":"tidak di beberapa","not_null":"tidak null","not_start":"tidak diawali dengan","not_start_all":"tidak diawali semua dengan","not_start_any":"tidak diawali beberapa dengan","null":"null","present":"ada","start":"diawali dengan","start_all":"diawali semua dengan","start_any":"diawali beberapa dengan","true":"bernilai benar"},"search":"cari","sort":"urutan","value":"data"}});
I18n.translations["hu"] = I18n.extend((I18n.translations["hu"] || {}), {"ransack":{"all":"mindegyik","and":"és","any":"bármely","asc":"növekvő","attribute":"attribute","combinator":"combinator","condition":"feltétel","desc":"csökkenő","or":"vagy","predicate":"állítás","predicates":{"blank":"üres","cont":"tartalmazza","cont_all":"mindet tartalmazza","cont_any":"bármelyiket tartalmazza","does_not_match":"nem egyezik","does_not_match_all":"nem egyezik az összessel","does_not_match_any":"nem egyezik semelyikkel","end":"így végződik","end_all":"ezekkel végződik","end_any":"bármelyikkel végződik","eq":"egyenlő","eq_all":"minddel egyenlő","eq_any":"bármelyikkel egyenlő","false":"hamis","gt":"nagyobb, mint","gt_all":"mindegyiknél nagyobb","gt_any":"bármelyiknél nagyobb","gteq":"nagyobb vagy egyenlő, mint","gteq_all":"mindegyiknél nagyobb vagy egyenlő","gteq_any":"bármelyiknél nagyobb vagy egyenlő","in":"értéke","in_all":"értéke mindegyik","in_any":"értéke bármelyik","lt":"kisebb, mint","lt_all":"mindegyiknél kisebb","lt_any":"bármelyiknél kisebb","lteq":"kisebb vagy egyenlő, mint","lteq_all":"mindegyiknél kisebb vagy egyenlő","lteq_any":"bármelyiknél kisebb vagy egyenlő","matches":"egyezik","matches_all":"minddel egyezik","matches_any":"bármelyikkel egyezik","not_cont":"nem tartalmazza","not_cont_all":"nem tartalmazza mindet","not_cont_any":"egyiket sem tartalmazza","not_end":"nem úgy végződik","not_end_all":"nem ezekkel végződik","not_end_any":"nem ezek egyikével végződik","not_eq":"nem egyenlő","not_eq_all":"nem egyenlő egyikkel sem","not_eq_any":"nem egyenlő bármelyikkel","not_in":"nem ez az értéke","not_in_all":"értéke nem ezek az elemek","not_in_any":"értéke egyik sem","not_null":"nem null","not_start":"nem így kezdődik","not_start_all":"nem ezekkel kezdődik","not_start_any":"nem ezek egyikével kezdődik","null":"null","present":"létezik","start":"így kezdődik","start_all":"ezekkel kezdődik","start_any":"bármelyikkel kezdődik","true":"igaz"},"search":"keresés","sort":"rendezés","value":"érték"}});
I18n.translations["zh-TW"] = I18n.extend((I18n.translations["zh-TW"] || {}), {"ransack":{"all":"所有","and":"而且","any":"任何","asc":"升冪排序","attribute":"屬性","combinator":"條件組合","condition":"條件","desc":"降冪排序","or":"或者","predicate":"基於","predicates":{"blank":"為空","cont":"包含","cont_all":"包含所有值","cont_any":"包含任何一個值","does_not_match":"不符合","does_not_match_all":"不符合所有條件","does_not_match_any":"不符合任何一個條件","end":"以某個值結尾","end_all":"以所有值結尾","end_any":"以任何一個值結尾","eq":"等於","eq_all":"等於所有值","eq_any":"等於任何一個值","false":"為假","gt":"大於","gt_all":"大於所有值","gt_any":"大於任何一個值","gteq":"大於或等於","gteq_all":"大於或等於所有值","gteq_any":"大於或等於任何一個值","in":"被包含於","in_all":"被包含於所有值","in_any":"被包含於任何一個值","lt":"小於","lt_all":"小於所有值","lt_any":"小於任何一個值","lteq":"小於或等於","lteq_all":"小於或等於所有值","lteq_any":"小於或等於任何一個值","matches":"符合","matches_all":"符合所有條件","matches_any":"符合任何一個條件","not_cont":"不包含","not_cont_all":"不包含所有值","not_cont_any":"不包含任何一個值","not_end":"不以某個值結尾","not_end_all":"不以所有值結尾","not_end_any":"不以任何一個值結尾","not_eq":"不等於","not_eq_all":"不等於所有值","not_eq_any":"不等於任何一個值","not_in":"不被包含於","not_in_all":"不被包含於所有值","not_in_any":"不被包含於任何一個值","not_null":"不為 null","not_start":"不以某個值開始","not_start_all":"不以所有值開始","not_start_any":"不以任何一值開始","null":"為 null","present":"有值","start":"以某個值開始","start_all":"以所有值開始","start_any":"以任何一個值開始","true":"為真"},"search":"搜尋","sort":"排序","value":"數值"}});
I18n.translations["zh-CN"] = I18n.extend((I18n.translations["zh-CN"] || {}), {"ransack":{"all":"所有","and":"并且","any":"任意","asc":"升序","attribute":"属性","combinator":"条件组合(combinator)","condition":"条件","desc":"降序","or":"或者","predicate":"基于(predicate)","predicates":{"blank":"为空","cont":"包含","cont_all":"包含所有值","cont_any":"包含任意一个值","does_not_match":"不符合","does_not_match_all":"不符合所有条件","does_not_match_any":"符合任意条件","end":"以改值结尾","end_all":"以所有值结尾","end_any":"以任意一个值结尾","eq":"等于","eq_all":"等于所有值","eq_any":"等于任意值","false":"等于false","gt":"大于","gt_all":"大于所有值","gt_any":"大于任意一个值","gteq":"大于等于","gteq_all":"大于等于所有值","gteq_any":"大于等于任意一个值","in":"被包含","in_all":"被所有值包含","in_any":"被任意值包含","lt":"小于","lt_all":"小于所有值","lt_any":"小于任意一个值","lteq":"小于等于","lteq_all":"小于等于所有值","lteq_any":"小于等于任意一个值","matches":"符合","matches_all":"符合所有条件","matches_any":"符合任意条件","not_cont":"不包含","not_cont_all":"不包含所有值","not_cont_any":"不包含任意一个值","not_end":"不以改值结尾","not_end_all":"不以所有值结尾","not_end_any":"不以任意一个值结尾","not_eq":"不等于","not_eq_all":"不等于所有值","not_eq_any":"不等于任意值","not_in":"不被包含","not_in_all":"不被所有值包含","not_in_any":"不被任意值包含","not_null":"不是null","not_start":"不以改值开始","not_start_all":"不以所有值开始","not_start_any":"不以任意一个值开始","null":"是null","present":"有值","start":"以改值开始","start_all":"以所有值开始","start_any":"以任意一个值开始","true":"等于true"},"search":"搜索","sort":"排序","value":"数值"}});
I18n.translations["nl"] = I18n.extend((I18n.translations["nl"] || {}), {"ransack":{"all":"alle","and":"en","any":"enig","asc":"oplopend","attribute":"attribuut","combinator":"combinator","condition":"conditie","desc":"aflopend","or":"of","predicate":"eigenschap","predicates":{"blank":"is afwezig","cont":"bevat","cont_all":"bevat alle","cont_any":"bevat enig","does_not_match":"evenaart niet","does_not_match_all":"evenaart niet voor alle","does_not_match_any":"evenaart niet voor enig","end":"eindigt met","end_all":"eindigt met alle","end_any":"eindigt met enig","eq":"gelijk","eq_all":"gelijk alle","eq_any":"gelijk enig","false":"is niet waar","gt":"groter dan","gt_all":"groter dan alle","gt_any":"groter dan enig","gteq":"groter dan or equal to","gteq_all":"groter dan or equal to alle","gteq_any":"groter dan or equal to enig","in":"in","in_all":"in alle","in_any":"in enig","lt":"kleiner dan","lt_all":"kleiner dan alle","lt_any":"kleiner dan enig","lteq":"kleiner dan of gelijk aan","lteq_all":"kleiner dan of gelijk aan alle","lteq_any":"kleiner dan of gelijk aan enig","matches":"evenaart","matches_all":"evenaart alle","matches_any":"evenaart enig","not_cont":"bevat niet","not_cont_all":"bevat niet alle","not_cont_any":"bevat niet enig","not_end":"eindigt niet met","not_end_all":"eindigt niet met alle","not_end_any":"eindigt niet met enig","not_eq":"niet gelijk aan","not_eq_all":"niet gelijk aan alle","not_eq_any":"niet gelijk aan enig","not_in":"niet in","not_in_all":"niet in alle","not_in_any":"niet in enig","not_null":"is niet null","not_start":"start niet met","not_start_all":"start niet met alle","not_start_any":"start niet met enig","null":"is null","present":"is present","start":"start met","start_all":"start met alle","start_any":"start met enig","true":"is waar"},"search":"zoeken","sort":"sorteren","value":"waarde"}});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), {"ransack":{"all":"alle","and":"und","any":"beliebige","asc":"aufsteigend","attribute":"Attribut","combinator":"Kombinator","condition":"Bedingung","desc":"absteigend","or":"oder","predicate":"Eigenschaft","predicates":{"blank":"ist leer","cont":"enthält","cont_all":"enthält alle","cont_any":"enthält beliebige","does_not_match":"stimmt nicht überein","does_not_match_all":"stimmt nicht mit allen überein","does_not_match_any":"erfüllt ein beliebiger/s nicht","end":"endet mit","end_all":"endet mit allen","end_any":"endet mit beliebigen","eq":"gleicht","eq_all":"gleicht allen","eq_any":"gleicht beliebigen","false":"ist falsch","gt":"größer als","gt_all":"größer als alle","gt_any":"größer als ein beliebiger/s","gteq":"größer oder gleich","gteq_all":"größer oder gleich alle","gteq_any":"größer oder gleich als ein beliebiger/s","in":"in","in_all":"in allen","in_any":"ist nicht in einem beliebigen","lt":"kleiner als","lt_all":"kleiner als alle als alle","lt_any":"kleiner als ein beliebiger/s","lteq":"kleiner oder gleich","lteq_all":"kleiner oder gleich allen","lteq_any":"kleiner oder gleich beliebige","matches":"entspricht","matches_all":"stimmt mit allen überein","matches_any":"stimmt überein mit einem beliebigen","not_cont":"enthält nicht","not_cont_all":"enthält keine/s","not_cont_any":"enthält ein beliebiger/s nicht","not_end":"endet nicht mit","not_end_all":"endet nicht mit allen","not_end_any":"endet nicht mit beliebigen","not_eq":"ungleich","not_eq_all":"ungleich allen","not_eq_any":"ungleich beliebigen","not_in":"nicht in","not_in_all":"nicht in allen","not_in_any":"nicht in beliebige","not_null":"ist nicht null","not_start":"beginnt nicht mit","not_start_all":"beginnt nicht mit allen","not_start_any":"beginnt nicht mit beliebigen","null":"ist null","present":"ist vorhanden","start":"beginnt mit","start_all":"beginnt mit allen","start_any":"beginnt mit beliebigen","true":"ist wahr"},"search":"suchen","sort":"sortieren","value":"Wert"}});
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), {"ransack":{"all":"todos","and":"y","any":"cualquier","asc":"ascendente","attribute":"atributo","combinator":"combinado","condition":"condición","desc":"descendente","or":"o","predicate":"predicado","predicates":{"blank":"está en blanco","cont":"contiene","cont_all":"contiene todos","cont_any":"contiene cualquier","does_not_match":"no coincide","does_not_match_all":"no coincide con todos","does_not_match_any":"no coincide con ninguna","end":"termina con","end_all":"termina con todo","end_any":"termina con cualquier","eq":"es igual a","eq_all":"es igual a todos","eq_any":"es igual a cualquier","false":"es falso","gt":"mayor que","gt_all":"mayor que todos","gt_any":"mayor que cualquier","gteq":"mayor que o igual a","gteq_all":"mayor que o igual a todos","gteq_any":"mayor que o igual a cualquier","in":"en","in_all":"en todos","in_any":"en cualquier","lt":"menor que","lt_all":"menor o igual a","lt_any":"menor que cualquier","lteq":"menor que o igual a","lteq_all":"menor o igual a todos","lteq_any":"menor o igual a cualquier","matches":"coincidir","matches_all":"coincidir a todos","matches_any":"coincidir a cualquier","not_cont":"no contiene","not_cont_all":"no contiene toda","not_cont_any":"no contiene ninguna","not_end":"no termina con","not_end_all":"no termina con todo","not_end_any":"no termina con cualquier","not_eq":"no es igual a","not_eq_all":"no es iguala todos","not_eq_any":"no es igual a cualquier","not_in":"no en","not_in_all":"no en todos","not_in_any":"no en cualquier","not_null":"no es nula","not_start":"no inicia con","not_start_all":"no inicia con toda","not_start_any":"no comienza con cualquier","null":"es nula","present":"es presente","start":"comienza con","start_all":"comienza con toda","start_any":"comienza con cualquier","true":"es verdadero"},"search":"buscar","sort":"ordernar","value":"valor"}});
I18n.translations["fr"] = I18n.extend((I18n.translations["fr"] || {}), {"ransack":{"all":"tous","and":"et","any":"au moins un","asc":"ascendant","attribute":"attribut","combinator":"combinateur","condition":"condition","desc":"descendant","or":"ou","predicate":"prédicat","predicates":{"blank":"est blanc","cont":"contient","cont_all":"contient tous","cont_any":"contient au moins un","does_not_match":"ne correspond pas à","does_not_match_all":"ne correspond à aucun","does_not_match_any":"ne correspond pas à au moins un","end":"finit par","end_all":"finit par tous","end_any":"finit par au moins un","eq":"égal à","eq_all":"égal à tous","eq_any":"égal à au moins un","false":"est faux","gt":"supérieur à","gt_all":"supérieur à tous","gt_any":"supérieur à au moins un","gteq":"supérieur ou égal à","gteq_all":"supérieur ou égal à tous","gteq_any":"supérieur ou égal à au moins un","in":"inclus dans","in_all":"inclus dans tous","in_any":"inclus dans au moins un","lt":"inférieur à","lt_all":"inférieur à tous","lt_any":"inférieur à au moins un","lteq":"inférieur ou égal à","lteq_all":"inférieur ou égal à tous","lteq_any":"inférieur ou égal à au moins un","matches":"correspond à","matches_all":"correspond à tous","matches_any":"correspond à au moins un","not_cont":"ne contient pas","not_cont_all":"ne contient pas tous","not_cont_any":"ne contient pas au moins un","not_end":"ne finit pas par","not_end_all":"ne finit pas par tous","not_end_any":"ne finit pas par au moins un","not_eq":"différent de","not_eq_all":"différent de tous","not_eq_any":"différent d'au moins un","not_in":"non inclus dans","not_in_all":"non inclus dans tous","not_in_any":"non inclus dans au moins un","not_null":"n'est pas null","not_start":"ne commence pas par","not_start_all":"ne commence pas par tous","not_start_any":"ne commence pas par au moins un","null":"est null","present":"est présent","start":"commence par","start_all":"commence par tous","start_any":"commence par au moins un","true":"est vrai"},"search":"recherche","sort":"tri","value":"valeur"}});
I18n.translations["cs"] = I18n.extend((I18n.translations["cs"] || {}), {"ransack":{"all":"každou","and":"a","any":"kteroukoliv","asc":"vzestupné","attribute":"atribut","combinator":"kombinátor","condition":"podmínka","desc":"sestupné","or":"nebo","predicate":"predikát","predicates":{"blank":"je prázdné","cont":"obsahuje","cont_all":"obsahuje všechny","cont_any":"obsahuje kterékoliv","does_not_match":"neodpovídá","does_not_match_all":"neodpovídá všem","does_not_match_any":"neodpovídá kterékoliv","end":"končí s","end_all":"končí se všemi","end_any":"končí s kteroukoliv","eq":"rovno","eq_all":"rovno všem","eq_any":"rovno kterékoliv","false":"není pravdivé","gt":"větší než","gt_all":"větší než všechny","gt_any":"větší než kterákoliv","gteq":"větší nebo rovno než","gteq_all":"větší nebo rovno než všechny","gteq_any":"větší nebo rovno než kterákoliv","in":"v","in_all":"ve všech","in_any":"v kterékoliv","lt":"menší než","lt_all":"menší než všechny","lt_any":"menší než kterákoliv","lteq":"menší nebo rovno než","lteq_all":"menší nebo rovno než všechny","lteq_any":"menší nebo rovno než kterákoliv","matches":"odpovídá","matches_all":"odpovídá všem","matches_any":"odpovídá kterékoliv","not_cont":"neobsahuje","not_cont_all":"neobsahuje všechny","not_cont_any":"neobsahuje kteroukoliv","not_end":"nekončí s","not_end_all":"nekončí se všemi","not_end_any":"nekončí s kteroukoliv","not_eq":"nerovno","not_eq_all":"nerovno všem","not_eq_any":"nerovno kterékoliv","not_in":"není v","not_in_all":"není ve všech","not_in_any":"není v kterékoliv","not_null":"není null","not_start":"nezačíná s","not_start_all":"nezačíná se všemi","not_start_any":"nezačíná s kteroukoliv","null":"je null","present":"je vyplněné","start":"začíná s","start_all":"začíná se všemi","start_any":"začíná s kteroukoliv","true":"je pravdivé"},"search":"vyhledávání","sort":"řazení","value":"hodnota"}});
I18n.translations["pt-BR"] = I18n.extend((I18n.translations["pt-BR"] || {}), {"ransack":{"all":"todos","and":"e","any":"algum","asc":"ascendente","attribute":"atributo","combinator":"combinador","condition":"condição","desc":"descendente","or":"ou","predicate":"predicado","predicates":{"blank":"está em branco","cont":"contém","cont_all":"contém todos","cont_any":"contém algum","does_not_match":"não corresponde","does_not_match_all":"não corresponde a todos","does_not_match_any":"não corresponde a algum","end":"termina com","end_all":"termina com todos","end_any":"termina com algum","eq":"igual","eq_all":"igual a todos","eq_any":"igual a algum","false":"é falso","gt":"maior que","gt_all":"maior que todos","gt_any":"maior que algum","gteq":"maior que ou igual a","gteq_all":"maior que ou igual a todos","gteq_any":"maior que ou igual a algum","in":"em","in_all":"em todos","in_any":"em algum","lt":"menor que","lt_all":"menor que todos","lt_any":"menor que algum","lteq":"menor ou igual a","lteq_all":"menor ou igual a todos","lteq_any":"menor ou igual a algum","matches":"corresponde","matches_all":"corresponde a todos","matches_any":"corresponde a algum","not_cont":"não contém","not_cont_all":"não contém todos","not_cont_any":"não contém algum","not_end":"não termina com","not_end_all":"não termina com todos","not_end_any":"não termina com algum","not_eq":"não é igual a","not_eq_all":"não é igual a todos","not_eq_any":"não é igual a algum","not_in":"não em","not_in_all":"não em todos","not_in_any":"não em algum","not_null":"não é nulo","not_start":"não começa com","not_start_all":"não começa com algum","not_start_any":"não começa com algum","null":"é nulo","present":"está presente","start":"começa com","start_all":"começa com todos","start_any":"começa com algum","true":"é verdadeiro"},"search":"pesquisar","sort":"classificar","value":"valor"}});
I18n.translations["da"] = I18n.extend((I18n.translations["da"] || {}), {"ransack":{"all":"alle","and":"og","any":"anhver","asc":"opstigende","attribute":"attribut","combinator":"kombinering","condition":"betingelse","desc":"faldende","or":"eller","predicate":"predicate","predicates":{"blank":"er blank","cont":"indeholder","cont_all":"indeholder alle","cont_any":"indeholder nogen","does_not_match":"matcher ikke","does_not_match_all":"matcher ikke alle","does_not_match_any":"matcher ikke nogen","end":"slutter med","end_all":"slutter med alle","end_any":"slutter med nogen","eq":"lig med","eq_all":"lig med alle","eq_any":"lig med enhver","false":"er falsk","gt":"større end","gt_all":"større end alle","gt_any":"større end nogen","gteq":"større end eller lig med","gteq_all":"større end eller lig med alle","gteq_any":"større end eller lig med nogen","in":"i","in_all":"i alle","in_any":"i nogen","lt":"mindre end","lt_all":"mindre end alle","lt_any":"mindre end nogen","lteq":"mindre end eller lig med","lteq_all":"mindre end eller lig med alle","lteq_any":"mindre end eller lig med nogen","matches":"matcher","matches_all":"matcher alle","matches_any":"matcher enhver","not_cont":"indeholder ikke","not_cont_all":"indeholder ikke alle","not_cont_any":"indeholder ikke nogen","not_end":"slutter ikke med","not_end_all":"slutter ikke med alle","not_end_any":"slutter ikke med nogen","not_eq":"ikke lig med","not_eq_all":"ikke lig med alle","not_eq_any":"ikke lig med nogen","not_in":"ikke i","not_in_all":"ikke i alle","not_in_any":"ikke i nogen","not_null":"er ikke nul","not_start":"starter ikke med","not_start_all":"starter ikke med alle","not_start_any":"starter ikke med nogen","null":"er nul","present":"er til stede","start":"starter med","start_all":"starter med alle","start_any":"starter med nogen","true":"er sand"},"search":"søg","sort":"sorter","value":"værdi"}});
I18n.translations["ro"] = I18n.extend((I18n.translations["ro"] || {}), {"ransack":{"all":"toate","and":"și","any":"oricare","asc":"crescător","attribute":"atribut","combinator":"combinator","condition":"condiție","desc":"descrescător","or":"sau","predicate":"predicat","predicates":{"blank":"este gol","cont":"conține","cont_all":"conține toate","cont_any":"conține unul din","does_not_match":"nu corespunde","does_not_match_all":"nu corespunde cu toate","does_not_match_any":"nu corespunde cu nici un","end":"se termină cu","end_all":"se termină cu toate","end_any":"se termină cu unul din","eq":"egal cu","eq_all":"egal cu toate","eq_any":"egal cu unul din","false":"este fals","gt":"mai mare de","gt_all":"mai mare decât toate","gt_any":"mai mare decât cel puțin unul din","gteq":"mai mare sau egal decât","gteq_all":"mai mare sau egal decât toate","gteq_any":"mai mare sau egal decât cel puțin unul din","in":"inclus în","in_all":"inclus în toate","in_any":"inclus într-unul din","lt":"mai mic de","lt_all":"mai mic decât toate","lt_any":"mai mic decât cel puțin unul din","lteq":"mai mic sau egal decât","lteq_all":"mai mic sau egal decât toate","lteq_any":"mai mic sau egal decât cel puțin unul din","matches":"corespunde","matches_all":"corespunde cu toate","matches_any":"corespunde cu unul din","not_cont":"nu conține","not_cont_all":"nu conține toate","not_cont_any":"nu conține unul din","not_end":"nu se termină cu","not_end_all":"nu se termină cu toate","not_end_any":"nu se termină cu unul din","not_eq":"diferit de","not_eq_all":"nu este egal cu toate","not_eq_any":"diferit de toate","not_in":"nu este inclus în","not_in_all":"nu este inclus în toate","not_in_any":"nu este inclus într-unul din","not_null":"nu este nul","not_start":"nu începe","not_start_all":"nu începe cu toate","not_start_any":"nu începe cu unul din","null":"este nul","present":"este prezent","start":"începe cu","start_all":"începe cu toate","start_any":"începe cu unul din","true":"este adevărat"},"search":"caută","sort":"sortează","value":"valoare"}});